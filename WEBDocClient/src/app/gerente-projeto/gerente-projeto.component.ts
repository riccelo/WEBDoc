import { Component, OnInit, Injectable } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, merge} from 'rxjs';
import { map } from 'rxjs/operators';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DlgInputBoxComponent } from '../dlg-input-box/dlg-input-box.component'
import { DlgPastaPropriedadesComponent } from '../dlg-pasta-propriedades/dlg-pasta-propriedades.component'

import { GerenteProjetoService } from '../services/gerente-projeto.service'
import { GerenteClasseService } from '../services/gerente-classe.service'

import { Projeto } from '../models/projeto';
import { Pasta } from '../models/pasta';
import { Classe } from '../models/classe';

@Component({
  selector: 'app-gerente-projeto',
  templateUrl: './gerente-projeto.component.html',
  styleUrls: ['./gerente-projeto.component.css']
})
export class GerenteProjetoComponent implements OnInit {

  constructor(private dlg:MatDialog,
              private gerProj: GerenteProjetoService,
            private gerClasse: GerenteClasseService) {
    this.projetos = new Array<Projeto>();
    this.projetoSelecionado = new Projeto();

    this.treeControl = new FlatTreeControl<Pasta>(this.getLevel, this.isExpandable);
    this.pastas = new DynamicDataSource(this.treeControl); 
    
    this.selProjeto(this.projetoSelecionado);

    this.carregarProjetos();
  }

  ngOnInit() {
  }
  treeControl: FlatTreeControl<Pasta>;
  pastas: DynamicDataSource;
  pastaEmEdicao:Pasta;
  
  projetos:Projeto[];
  projetoSelecionado:Projeto;

  getLevel = (node: Pasta) => {
    //console.log("getLevel", node);
    return node.nivel; 
  };
  isExpandable = (node: Pasta) => {
    //console.log("isExpandable", node);  
    return node.subPastas.length > 0;
  };

  selProjeto(projeto:Projeto): void {    
    this.projetoSelecionado = projeto;
    let pastas:Pasta[] = new Array<Pasta>();
    pastas.push(this.projetoSelecionado.pastaRaiz);
    this.pastas.data = pastas;
  }

  adicionarPasta(pasta:Pasta): void {
    let dialogRef = this.dlg.open(DlgInputBoxComponent, 
      {width: '600px', data: {titulo: 'Informe valor da pasta:', texto: pasta.nome}}
    );
dialogRef.afterClosed().subscribe((r) => {
    var novaPasta: Pasta = new Pasta();
    novaPasta.nivel = pasta.nivel + 1;
    novaPasta.nome = r;
    //novaPasta.pai = pasta;
    //novaPasta._id = pasta.subPastas.length * -1;

    pasta.subPastas.push(novaPasta);
    
    this.treeControl.collapse(pasta);
    this.treeControl.expand(pasta);
    
    console.log(this.projetoSelecionado.pastaRaiz);    
  });
  }

  removerPasta(pasta:Pasta): void {
    var idx = pasta.pai.subPastas.findIndex(p => p._id === pasta._id);
    pasta.pai.subPastas.splice(idx, 1);

    this.treeControl.collapse(pasta.pai);
    this.treeControl.expand(pasta.pai);
  }

  editarPasta(pasta:Pasta, editar:boolean): void{
    let dialogRef = this.dlg.open(DlgPastaPropriedadesComponent, 
      {width: '80%', data: {pasta: pasta}}
    );
    dialogRef.afterClosed().subscribe(
      r => pasta = r
    );  
}

  carregarProjetos(): void {
    this.gerProj.getProjetos().subscribe( projs => this.projetos = projs);
  }

  salvarProjeto(): void {
    if (!this.projetoSelecionado._id){
      this.projetoSelecionado._id = (this.projetos.length + 1) * -1;
    }

    this.gerProj.salvarProjeto(this.projetoSelecionado).subscribe((r) => {
      console.log("Projeto Salvo", r._id)
      this.carregarProjetos();
    })

    this.projetoSelecionado = new Projeto();
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