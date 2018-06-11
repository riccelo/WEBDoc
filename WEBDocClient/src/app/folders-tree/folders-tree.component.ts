import { Component, OnInit, Injectable } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, merge } from 'rxjs';
import { map } from 'rxjs/operators';

import { Pasta } from '../models/pasta';
import { Projeto } from '../models/projeto';

const FOLDERS:Pasta[] = [{
  _id:0,classes:[],nome:'',pai:undefined,subPastas:[],nivel:0}];

@Injectable()
export class DynamicDataSource {

  dataChange: BehaviorSubject<Pasta[]> = new BehaviorSubject<Pasta[]>([]);

  get data(): Pasta[] { return this.dataChange.value; }
  set data(value: Pasta[]) {
    this.treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(private treeControl: FlatTreeControl<Pasta>) {}

  connect(collectionViewer: CollectionViewer): Observable<Pasta[]> {
    this.treeControl.expansionModel.onChange!.subscribe(change => {
      //console.log(change);
      if ((change as SelectionChange<Pasta>).added ||
        (change as SelectionChange<Pasta>).removed) {
        this.handleTreeControl(change as SelectionChange<Pasta>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<Pasta>) {
    if (change.added) {
      change.added.forEach((node) => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed.reverse().forEach((node) => this.toggleNode(node, false));
    }
  }

  /**
   * Toggle the node, remove from display list
   */
  toggleNode(node: Pasta, expand: boolean) {
    const children = node.subPastas;
    const index = this.data.indexOf(node);
    if (!children || index < 0) { // If no children, or cannot find the node, no op
      return;
    }

    if (expand) {
      const nodes = children.map(subFolder => {
        var f = new Pasta();
        f._id = subFolder._id;
        f.nome = subFolder.nome;
        f.nivel = subFolder.nivel;
        f.subPastas = subFolder.subPastas;

        return f;
      });

      this.data.splice(index + 1, 0, ...nodes);
    } else {
      this.data.splice(index + 1, children.length);
    }

    // notify the change
    this.dataChange.next(this.data);
  }
}

@Component({
  selector: 'app-folders-tree',
  templateUrl: './folders-tree.component.html',
  styleUrls: ['./folders-tree.component.css']
})

export class FoldersTreeComponent implements OnInit {

  constructor() {
    this.treeControl = new FlatTreeControl<Pasta>(this.getLevel, this.isExpandable);
    this.folders = new DynamicDataSource(this.treeControl);

    this.folders.data = FOLDERS;
   }

  ngOnInit() {
  }

  treeControl: FlatTreeControl<Pasta>;
  folders: DynamicDataSource;

  getLevel = (node: Pasta) => {
    //console.log("getLevel", node);
    return node.nivel; 
  };
  isExpandable = (node: Pasta) => {
    //console.log("isExpandable", node);  
    return node.subPastas.length > 0;
  };
}
