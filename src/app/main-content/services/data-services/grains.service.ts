import { ContentTable, Row } from '../classes/content-table';
import { ContentPost } from '../classes/content-post';
import { Injectable } from '@angular/core';

@Injectable()
export class GrainsService {

  /********
   * Tables
   ********/
  private maizForrajeroTable = new ContentTable(
    [
      new Row('PROTEINA', '9.4%'),
      new Row('GRASA', '4.7%'),
      new Row('FIBRA', '4.5%'),
      new Row('CALCIO', '7 Mg')
    ]
  );

  private maizTortilleroTable = new ContentTable(
    [
      new Row('PROTEINA', '9.4%'),
      new Row('GRASA', '4.7%'),
      new Row('FIBRA', '4.5%'),
      new Row('CALCIO', '7 Mg')
    ]
  );

  private trigoTable = new ContentTable(
    [
      new Row('PROTEINA', '15.4%'),
      new Row('GRASA', '1.9%'),
      new Row('FIBRA', '12.2%'),
      new Row('CALCIO', '25 Mg')
    ]
  );

  private sorgoTable = new ContentTable(
    [
      new Row('PROTEINA', '7.2%'),
      new Row('GRASA', '3.9%'),
      new Row('FIBRA', '2.7%'),
      new Row('CALCIO', '5 Mg')
    ]
  );

  private semillaDeAlgodonTable = new ContentTable(
    [
      new Row('PROTEINA', '21.0%'),
      new Row('GRASA', '17.0%'),
      new Row('FIBRA', '24.0%'),
      new Row('CALCIO', '0.14%')
    ]
  );

  private cartamoTable = new ContentTable(
    [
      new Row('PROTEINA', '18.0%'),
      new Row('GRASA', '16.9%'),
      new Row('FIBRA', '12.7%'),
      new Row('CALCIO', '5 Mg')
    ]
  );

  /********
    * Information
    ********/

  private maizForrajero = new ContentPost(
    'Maíz Forrajero',
    `El maíz como parte de las mezclas para alimento destaca por su riqueza en hidratos de carbono proporcionados por su abundante almidón.
    Como consecuencia es un alimento muy saciable y muy completo, posee una proporción
    muy elevada de proteínas y aunque no todas son asimilables posee también porcentajes muy elevados de potasio hierro y fosforo.`,
    'http://via.placeholder.com/200x200',
    'maiz-forrajero',
    this.maizForrajeroTable,
  );

  private maizTortillero = new ContentPost(
    'Maíz Tortillero',
    `El Maíz utilizado para alimentación humana es fundamental,
    capaz de saciar el hambre durante un tiempo prolongado sin
    tener que recurrir a otros alimentos menos saludables para el organismo,
    se ha comprobado que las dietas que incluyen maíz permiten disminuir de
    peso de manera adecuada.`,
    'http://via.placeholder.com/200x200',
    'maiz-tortillero',
    this.maizTortilleroTable,
  );

  private trigo = new ContentPost(
    'Trigo',
    `El trigo es uno de los alimentos más completos tanto para la alimentación Humana
    como pecuaria, contiene una cantidad muy elevada de minerales como potasio, fosforo,
    hierro, zinc entre otros, existen dos grupos principales, los trigos cristalinos o
    duros y los trigos harineros o blandos usados en la industria harinera y de pastas.`,
    'http://via.placeholder.com/200x200',
    'trigo',
    this.trigoTable,
  );

  private sorgo = new ContentPost(
    'Sorgo',
    `El sorgo forrajero es un cultivo que se adapta bien a zonas en
    las cuales el maíz se ve limitado en su producción y calidad,
    debido a problemas climáticos (déficit de lluvias) y de suelos (baja fertilidad).
    Este presenta un valor nutritivo inferior al del maíz, el sorgo se usa para mas
    comúnmente la alimentación Animal como componente de la ración, en un 50% o más,
    previo su molido o quebrado de su grano, proceso que aumenta la digestibilidad de
    la materia seca de la ingesta total.`,
    'http://via.placeholder.com/200x200',
    'sorgo',
    this.sorgoTable,
  );

  private algodon = new ContentPost(
    'Semilla de algodón',
    `Semilla de Algodón es un recurso abundante y de bajo costo para la alimentación de bovinos
    y constituye una fuente alta en proteína, fibra, grasa y energía.`,
    'http://via.placeholder.com/200x200',
    'semilla-algodon',
    this.semillaDeAlgodonTable,
  );

  private cartamo = new ContentPost(
    'Cártamo',
    `Originariamente, el cártamo fue cultivado por sus flores, las cuales fueron utilizadas para hacer
    pigmentos rojos y amarillos para la coloración de prendas de vestir y alimentos. Actualmente,
    este cultivo provee de aceite, jabón, y harina de extracción rica en proteínas y fibra.
    Su aceite se usa también para la prevención de enfermedades cardiovasculares por lo que es muy apreciado
    en los restaurantes de alta cocina gracias a estas propiedades.`,
    'http://via.placeholder.com/200x200',
    'cartamo',
    this.cartamoTable,
  );

  constructor() { }

}
