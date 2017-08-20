import { MultipleContactCard } from './classes/multiple-contact-card';
import { ContactCard } from './classes/contact-card';
import { Injectable } from '@angular/core';

@Injectable()
export class DirectoryService {
  contactsArray: Array<ContactCard>;

  private contraloria = new ContactCard('Contraloría', '106', 'contraloria106@alinsumos.com');
  private ventas = new ContactCard('Comercialización, ventas y logistica', '120', 'cristhiangastelum@alinsumos.com');
  private ventasEtchojoa = new ContactCard('Comercialización, ventas y logistica', null, 'supervisor.a4@alinsumos.com');
  private ventasCuliacan = new ContactCard('Operaciones y ventas Culiacán', null, 'ventasculiacan@alinsumos.com');
  private paraFinanciera = new MultipleContactCard([
    new ContactCard('Parafinanciera', '119', 'parafinanciera119@alinsumos.com'),
    new ContactCard('Parafinanciera', '120', 'parafinanciera120@alinsumos.com')
  ]);
  private fondoAseguramiento = new ContactCard('Fondo de Aseguramiento', '117', 'prograson2017@hotmail.com');
  private recursosHumanos = new ContactCard('Recursos Humanos', '115', 'ivalenzuela@alinsumos.com');
  private contabilidadGeneral = new ContactCard('Contabilidad General', '103', 'contabilidad103@alinsumos.com');
  private ventanillaAserca = new ContactCard('Ventanilla Aserca', '124', 'myrnalopez@alinsumos.com');
  private controlCalidadYBascula = new MultipleContactCard([
    new ContactCard('Control de Calidad/Báscula', '121', 'calidad121@alinsumos.com'),
    new ContactCard('Control de Calidad/Báscula', '111', 'bascula111@alinsumos.com')
  ]);
  private recepcion = new ContactCard('Recepción', '101', 'recepcion@alinsumos.com');

  constructor() {
    this.contactsArray = [
      this.contraloria,
      this.ventas,
      this.ventasEtchojoa,
      this.ventasCuliacan,
      this.paraFinanciera,
      this.fondoAseguramiento,
      this.recursosHumanos,
      this.contabilidadGeneral,
      this.ventanillaAserca,
      this.controlCalidadYBascula,
      this.recepcion
    ];
  }

}
