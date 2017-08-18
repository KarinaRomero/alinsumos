import { ContentPost } from './classes/content-post';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicesInformationService {
  servicesInformationArray: Array<ContentPost>;

  private paraFinanciera = new ContentPost(
    'ParaFinanciera',
    `La Parafinanciera ALIFIN tiene como Principal Objetivo el gestionar, obtener y otorgar financiamiento
          agrícola, estamos operando desde hace varios años con este esquema apoyando a nuestros productores del valle
          del Yaqui y Mayo, habilitando más de 7000 hectáreas de Trigo, Maíz, Cártamo, Sorgo, Algodón, etc.`,
    'pasillo.jpg'
  );

  private despepitadoraDeAlgodon = new ContentPost(
    'Despepitadora de Algodón',
    `En Alinsumos estamos siempre al pendiente de las necesidades de nuestros productores, razón por la cual
          ponemos en marcha la planta despepitadora de algodón, ubicada en calle 600 y 3 del valle del yaqui cuenta
          con dos plantas una Murray 1080 y una Murray 690 con capacidad de 350 pacas diarias, con la cual se dará
          servicio a más de 4000 has.`,
    'cotton.jpg'
  );

  private pignoracionDeGranos = new ContentPost(
    'Pignoración de Granos',
    `Se refiere al término pignorar que significa "dar o dejar en prenda". Es cuando se deposita temporalmente
          la totalidad o una parte de la cosecha y se obtiene un documento expedido por un almacén general de depósito
          que certifica la existencia del grano, mediante el cual, el productor esta en posibilidad de obtener un
          crédito prendario con un agente financiero.`,
    'trigo_granos.jpg'
  );

  private secadoDeGranos = new ContentPost(
    'Secado de Granos',
    `Los granos, como es bien conocido, no pueden conservarse almacenados si no están secos. La cuestión es
    determinar cuándo un grano se considera "seco". Como término general, para los granos como Maíz y Sorgo, una
    humedad del 14% se considera el límite para estimarlo como "seco". En el caso del Trigo Cristalino y
    Harinero 12 % se considera su límite.`,
    'secado_grano.jpg'
  );

  private transporteDeMercancia = new ContentPost(
    'Transporte de mercancía',
    `En Alinsumos sabemos la importancia de trasladar las mercancías en tiempo y forma a los destinos que
    nuestros clientes dispongan, por ello contamos con una flota de camiones moderna y funcional, contando con
    Cajas secas y refrigeradas, jaulas y camiones torton, garantizando un servicio de calidad y sin demoras.`,
    'transporte.jpg'
  );

  private importacionDeGranos = new ContentPost(
    'Importación de granos',
    `El Comercio Exterior es el intercambio de bienes, servicios y capitales entre diferentes países. Cuando un
    país necesita ingresar productos se produce la importación, la que es definida como "la introducción legal
    de mercancía extranjera para su uso o consumo del país"`,
    'maiz_cribado.jpg'
  );

  private almacenajeYConservacion = new ContentPost(
    'Almacenaje y conservación',
    `El valor económico, alimenticio agrícola e industrial asociado a los granos y semillas requieren de
    cuidados especiales para garantizar su calidad y esta debe mantenerse durante el tiempo necesario hasta el
    momento de su uso. El almacenamiento se refiere a la concentración de algún producto o insumo en lugares
    especialmente diseñados para tal efecto.`,
    'silos_costales.jpg'
  );

  constructor() {
    this.servicesInformationArray = [
      this.paraFinanciera,
      this.despepitadoraDeAlgodon,
      this.pignoracionDeGranos,
      this.secadoDeGranos,
      this.transporteDeMercancia,
      this.importacionDeGranos,
      this.almacenajeYConservacion
    ];
  }
}
