import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FlatTreeControl } from '@angular/cdk/tree';
import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, merge} from 'rxjs';
import { map } from 'rxjs/operators';

import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

import { GerenteProjetoService } from '../services/gerente-projeto.service';
import { GerenteObjetoService } from '../services/gerente-objeto.service';

import { Projeto } from '../models/projeto';
import { Pasta } from '../models/pasta';
import { Classe } from '../models/classe';
import { Objeto } from '../models/objeto';

const URL = 'http://localhost:3000/upload';

@Component({
  selector: 'app-projeto-info',
  templateUrl: './projeto-info.component.html',
  styleUrls: ['./projeto-info.component.css']
})
export class ProjetoInfoComponent implements OnInit {
  projeto: Projeto;
  pastas: DynamicDataSource;
  treeControl: FlatTreeControl<Pasta>;
  pastaSelecionada: Pasta;
  objetosPasta:Objeto[];

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor(
    private gerProjetos: GerenteProjetoService,
    private gerObjetos:GerenteObjetoService,
    private route: ActivatedRoute, 
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.treeControl = new FlatTreeControl<Pasta>(this.getLevel, this.isExpandable);
    this.pastas = new DynamicDataSource(this.treeControl);
    this.pastas.data = [new Pasta()];
    this.gerProjetos.getProjetoProducaoById(id)
      .subscribe((p) => {
        this.projeto = p; 
        let pastas:Pasta[] = new Array<Pasta>();
        pastas.push(this.projeto.pastaRaiz);
        this.pastas.data = pastas;
      }); 
  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };
  }
  
  getLevel = (node: Pasta) => {
    //console.log("getLevel", node);
    return node.nivel; 
  };
  isExpandable = (node: Pasta) => {
    //console.log("isExpandable", node);  
    return node.subPastas.length > 0;
  };

  save(): void {
    this.gerProjetos.salvarProjeto(this.projeto)
      .subscribe(() => {});
  }

  selecionarPasta(pasta:Pasta): void {
    //carregar objetos da pasta;
    this.gerObjetos.getObjetosPasta(pasta).subscribe(
      objs => this.objetosPasta = objs
    );
    this.pastaSelecionada = pasta;
  }
}

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
        // var f = new Pasta();
        // f._id = subFolder._id;
        // f.nome = subFolder.nome;
        // f.nivel = subFolder.nivel;
        // f.pai = subFolder.pai;
        // f.subPastas = subFolder.subPastas;

        return subFolder;
      });

      this.data.splice(index + 1, 0, ...nodes);
    } else {
      this.data.splice(index + 1, children.length);
    }

    // notify the change
    this.dataChange.next(this.data);
  }
}