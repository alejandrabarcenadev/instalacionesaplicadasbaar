import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import {
  Clock, Settings2, Layers, Star,
  ArrowRight, Menu, X,
  Droplets, Zap, FileText, Users,
  MapPin, ChevronRight,
  Shield, Award, Lightbulb, Handshake, Target, Heart,
  Images, Phone, Mail, Globe, ExternalLink,
  Building2, Home, Briefcase, Landmark, Factory,
  ShoppingBag, UtensilsCrossed, BookOpen, Car,
  Hotel, Crown, Umbrella,
  MessageCircle, Send, Bot, ChevronDown,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import baarLogo from "@/imports/logo_Baar.png";
import baarFavicon from "@/imports/logo_Baar-1.png";
import heroPhoto from "@/imports/fotografia_de_hero.png";
import placeholderProyectos from "@/imports/placeholder-baar-categoria-proyectos.png";
import placeholderEjecucion from "@/imports/placeholder-baar-ingenieria-en-ejecucion.png";
import ingFelipeFoto from "@/imports/ingenierio.felipe-barcena.jpg";
import torrePalladio01 from "@/imports/torre-palladio-01.jpg";
import lasOlasAcapulco01 from "@/imports/las-olas-acapulco-01.jpg";
import beGrandReforma01 from "@/imports/be-grand-reforma-01.jpg";
import venetianPuertoVallarta02 from "@/imports/venetian-puerto-vallarta-02.jpg";
import venetianPuertoVallarta01 from "@/imports/venetian-puerto-vallarta-01.jpg";
import maralagoAcapulco02 from "@/imports/maralago-acapulco-02.jpg";
import beGrandSanAngel01 from "@/imports/be-grand-san-angel-01.jpg";
import laJoyaAcapulco from "@/imports/la-joya-acapulco.jpg";
import beGrandLomas01 from "@/imports/be-grand-lomas-01.jpg";
import torrePalmaMayorca01 from "@/imports/torre-palma-mayorca-01.jpg";
import sheraton01 from "@/imports/sheraton-01.jpg";
import torreIbiza01 from "@/imports/torre-ibiza-01.jpg";
import beGrandAltoPedregal1 from "@/imports/be-grand-alto-pedregal-1.jpg";
import beGrandContaderoAmenidades01 from "@/imports/be-grand-contadero-amenidades-01.jpg";
import residencialRoyalReforma01 from "@/imports/residencial-royal-reforma-01.jpg";
import beGrandContadero02 from "@/imports/be-grand-contadero-02.jpg";
import grandPolanco02 from "@/imports/grand-polanco-02.jpg";
import colegioAleman01 from "@/imports/colegio-aleman-01.jpg";
import grandPolanco01 from "@/imports/grand-polanco-01.jpg";
import cannonMills01 from "@/imports/cannon-mills-01.jpg";
import hermerMercedesBenz01 from "@/imports/hermer-mercedes-benz-01.jpg";
import contaderoVistaAerea01 from "@/imports/contadero-vista-aerea-01.jpg";
import maralagoCuartoMaquinas12 from "@/imports/maralago-cuarto-maquinas-12.jpg";
import maralagoCuartoMaquinas09 from "@/imports/maralago-cuarto-maquinas-09.jpg";
import maralagoCuartoMaquinas04 from "@/imports/maralago-cuarto-maquinas-04.jpg";
import maralagoCuartoMaquinas01 from "@/imports/maralago-cuarto-maquinas-01.jpg";
import maralagoCuartoMaquinas03 from "@/imports/maralago-cuarto-maquinas-03.jpg";
import maralagoCuartoMaquinas07 from "@/imports/maralago-cuarto-maquinas-07.jpg";
import maralagoCuartoMaquinas05 from "@/imports/maralago-cuarto-maquinas-05.jpg";
import maralagoCuartoMaquinas15 from "@/imports/maralago-cuarto-maquinas-15.jpg";
import maralagoCuartoMaquinas11 from "@/imports/maralago-cuarto-maquinas-11.jpg";
import maralagoCuartoMaquinas06 from "@/imports/maralago-cuarto-maquinas-06.jpg";
import maralagoCuartoMaquinas10 from "@/imports/maralago-cuarto-maquinas-10.jpg";
import maralagoCuartoMaquinas14 from "@/imports/maralago-cuarto-maquinas-14.jpg";
import maralagoCuartoMaquinas02 from "@/imports/maralago-cuarto-maquinas-02.jpg";
import maralagoCuartoMaquinas08 from "@/imports/maralago-cuarto-maquinas-08.jpg";
import santaFeCuartoMaquinas02 from "@/imports/santa-fe-cuarto-maquinas-02.JPG";
import santaFeCuartoMaquinas01 from "@/imports/santa-fe-cuarto-maquinas-01.JPG";
import maralagoCuartoMaquinas17 from "@/imports/maralago-cuarto-maquinas-17.jpg";
import santaFeCuartoMaquinas03 from "@/imports/santa-fe-cuarto-maquinas-03.jpg";
import maralagoCuartoMaquinas13 from "@/imports/maralago-cuarto-maquinas-13.jpg";
/* ─── Brand ──────────────────────────────────────────────── */
const NAVY = "#0D1B2A";
const BLUE = "#0E7AC4";
const CYAN = "#21C8F6";
const GRAY = "#F5F7FA";

/* ─── Nav ────────────────────────────────────────────────── */
const navLinks = [
  { label: "Servicios",          href: "#servicios"    },
  { label: "Nuestra Historia",   href: "#nosotros"     },
  { label: "Experiencia",        href: "#experiencia"  },
  { label: "Valores",            href: "#valores"      },
  { label: "Proyectos",          href: "#proyectos"    },
  { label: "Galería",            href: "#galeria"      },
  { label: "Contacto",           href: "#contacto"     },
];

/* ─── Services ───────────────────────────────────────────── */
const servicios = [
  {
    icon: Droplets,
    titulo: "Ingeniería Hidrosanitaria",
    descripcion:
      "Diseñamos e implementamos sistemas para el abastecimiento, distribución, aprovechamiento y desalojo del agua en desarrollos habitacionales, turísticos, comerciales, institucionales e industriales.",
    items: ["Sistemas hidráulicos", "Instalaciones sanitarias", "Sistemas pluviales", "Agua tratada y reutilización", "Calentamiento central", "Protección contra incendio"],
    color: CYAN,
  },
  {
    icon: Zap,
    titulo: "Ingeniería Eléctrica",
    descripcion:
      "Desarrollamos infraestructura eléctrica en media y baja tensión mediante soluciones seguras, eficientes y coordinadas con las necesidades arquitectónicas, operativas y técnicas de cada desarrollo.",
    items: ["Media tensión", "Baja tensión", "Alumbrado", "Sistemas de fuerza", "Contactos", "Telecomunicaciones", "Sistemas de tierras", "Pararrayos"],
    color: BLUE,
  },
  {
    icon: FileText,
    titulo: "Ingeniería y Desarrollo de Proyectos",
    descripcion:
      "Transformamos requerimientos arquitectónicos, operativos y normativos en soluciones técnicas listas para coordinarse y ejecutarse.",
    items: ["Proyecto ejecutivo", "Ingeniería de detalle", "Memorias de cálculo", "Estudios especializados", "Isométricos", "Diagramas unifilares", "Memorias descriptivas", "Documentación técnica"],
    color: "#5A7A94",
  },
  {
    icon: Users,
    titulo: "Acompañamiento Integral",
    descripcion:
      "Acompañamos a nuestros clientes durante todo el ciclo del proyecto, coordinando decisiones técnicas y dando seguimiento desde la definición inicial hasta la puesta en marcha.",
    items: ["Planeación", "Diseño", "Coordinación y ejecución", "Entrega y puesta en marcha"],
    color: "#2A7A5C",
  },
];

/* ─── Stats ──────────────────────────────────────────────── */
const stats = [
  { value: "+40",   label: "Años de experiencia" },
  { value: "5,377", label: "Departamentos desarrollados" },
  { value: "84",    label: "Proyectos en distintos sectores" },
  { value: "2",     label: "Disciplinas principales" },
];

/* ─── Valores ────────────────────────────────────────────── */
const valores = [
  { icon: Shield,    titulo: "Confianza",         descripcion: "Cumplimos nuestra palabra y construimos relaciones duraderas mediante comunicación clara, transparencia y responsabilidad." },
  { icon: Award,     titulo: "Excelencia técnica", descripcion: "Trabajamos con rigor, experiencia y atención al detalle para desarrollar soluciones sólidas y confiables." },
  { icon: Lightbulb, titulo: "Innovación",         descripcion: "Incorporamos herramientas, metodologías y nuevas formas de trabajo que mejoran la planeación, la coordinación y la ejecución." },
  { icon: Handshake, titulo: "Colaboración",       descripcion: "Trabajamos junto a clientes, arquitectos, desarrolladores y especialistas porque los mejores resultados surgen de una visión compartida." },
  { icon: Target,    titulo: "Responsabilidad",    descripcion: "Diseñamos soluciones que consideran la seguridad, la eficiencia, el uso responsable de recursos y el impacto a largo plazo." },
  { icon: Heart,     titulo: "Compromiso",         descripcion: "Asumimos cada proyecto con profesionalismo, ética y dedicación, desde la primera decisión hasta la entrega final." },
];

/* ─── Sectores — datos exactos del archivo del cliente ───── */
const sectores = [
  { icon: Building2,       cantidad: 23, tipo: "Edificios habitacionales"                         },
  { icon: Umbrella,        cantidad: 13, tipo: "Desarrollos turísticos"                            },
  { icon: Home,            cantidad: 13, tipo: "Vivienda de interés social"                        },
  { icon: Settings2,       cantidad: 7,  tipo: "Plantas industriales"                              },
  { icon: UtensilsCrossed, cantidad: 6,  tipo: "Restaurantes"                                      },
  { icon: BookOpen,        cantidad: 6,  tipo: "Centros culturales, deportivos, colegios y templos" },
  { icon: ShoppingBag,     cantidad: 4,  tipo: "Centros comerciales"                               },
  { icon: Factory,         cantidad: 3,  tipo: "Edificios industriales"                            },
  { icon: Car,             cantidad: 3,  tipo: "Agencias automotrices"                             },
  { icon: Briefcase,       cantidad: 2,  tipo: "Edificios de oficinas"                             },
  { icon: Crown,           cantidad: 2,  tipo: "Viviendas de lujo"                                 },
  { icon: Landmark,        cantidad: 1,  tipo: "Edificio corporativo"                              },
  { icon: Hotel,           cantidad: 1,  tipo: "Hotel"                                             },
];

/* ─── Project types ──────────────────────────────────────── */
type Proyecto = {
  nombre: string;
  caracteristicas?: string;
  ubicacion: string;
  atencion?: string;
  instalaciones: string[];
};

type Categoria = {
  id: string;
  label: string;
  labelCorto: string;
  proyectos: Proyecto[];
};

/* ─── Proyectos — datos reales ───────────────────────────── */
const categorias: Categoria[] = [
  {
    id: "habitacional-lujo",
    label: "Desarrollo habitacional y vivienda de lujo",
    labelCorto: "Habitacional y vivienda de lujo",
    proyectos: [
      { nombre: "Conjunto Residencial Trianon", caracteristicas: "13 niveles", ubicacion: "Paseo de los Ahuehuetes, Col. Bosques de las Lomas, México D.F.", atencion: "Arq. Salomón Gorstein / Arq. Elías Fasja", instalaciones: ["Hidrosanitaria", "PCI"] },
      { nombre: "Trianon Conjunto Residencial", caracteristicas: "Dos torres (Versalles y Vendome), 7 niveles, 52 departamentos", ubicacion: "San Francisco, Col. Del Valle", atencion: "Ing. Arq. Salomón Gorstein / Arq. Elías Fasja", instalaciones: ["Eléctrica", "Hidrosanitaria", "PCI"] },
      { nombre: "Casa Fam. Cababie", ubicacion: "Conjunto Residencial La Loma, Bosques de las Lomas", atencion: "Sr. Rafael Cababie / Arq. Ricardo Sanz / Arq. Gitlin", instalaciones: ["Eléctrica", "Hidrosanitaria"] },
      { nombre: "Edificio Balcones de la Herradura", caracteristicas: "10 niveles", ubicacion: "Balcones de la Herradura, Naucalpan, Estado de México", atencion: "Ing. Yeshua Gitlin", instalaciones: ["Eléctrica", "Hidrosanitaria", "PCI"] },
      { nombre: "Conjunto Residencial Amatepec Du Park", caracteristicas: "Dos torres de 7 niveles, 14 departamentos", ubicacion: "Sierra Amatepec 34, Lomas de Chapultepec", atencion: "Arq. Salomón Gorstein / Arq. Elías Fasja", instalaciones: ["Hidrosanitaria", "PCI"] },
      { nombre: "Casa Fam. Jalife", ubicacion: "Conjunto Residencial La Loma, Bosques de las Lomas", atencion: "Ing. Jaime Jalife / Arq. Ricardo Sanz / Arq. Gitlin", instalaciones: ["Eléctrica", "Hidrosanitaria"] },
      { nombre: "Edificio Río Danubio", ubicacion: "Río Danubio, México D.F.", atencion: "Arq. Jacobo Guzic", instalaciones: ["Eléctrica", "Hidrosanitaria", "PCI"] },
      { nombre: "Conjunto Residencial Royal Reforma", caracteristicas: "Tres torres, 20 niveles, 120 departamentos", ubicacion: "Prolongación Bosque de Reforma", atencion: "Arq. Gorsthein Fasja / Arq. Ricardo Sanz", instalaciones: ["Hidrosanitaria", "PCI"] },
      { nombre: "Jalo, S.A.", caracteristicas: "Edificio de 8 niveles", ubicacion: "San Francisco, Col. Del Valle", atencion: "Ing. Mauricio Fertman", instalaciones: ["Eléctrica", "Hidrosanitaria", "PCI"] },
      { nombre: "Torre Palmas Kamerum", caracteristicas: "Edificio de 28 niveles, 106 departamentos", ubicacion: "Palmas Kamerum Esq. Periférico", atencion: "Arq. José Daniel K. / Don David Daniel K. / Ing. David Seur", instalaciones: ["Eléctrica"] },
    ],
  },
  {
    id: "be-grand",
    label: "Desarrollo habitacional vertical Be Grand",
    labelCorto: "Be Grand",
    proyectos: [
      { nombre: "Conjunto Residencial Grand Polanco Poniente", caracteristicas: "Dos torres de 23 niveles, 286 departamentos", ubicacion: "Boulevard Miguel de Cervantes Saavedra No. 388", atencion: "Sr. Nicolás Carrancedo / Arq. Ricardo Sanz", instalaciones: ["Eléctrica", "Hidrosanitaria", "PCI"] },
      { nombre: "Conjunto Residencial Grand Polanco Oriente", caracteristicas: "Dos torres, 21 niveles, 160 departamentos", ubicacion: "Boulevard Miguel de Cervantes Saavedra No. 388", atencion: "Sr. Nicolás Carrancedo / Arq. Ricardo Sanz", instalaciones: ["Eléctrica", "Hidrosanitaria", "PCI"] },
      { nombre: "Conjunto Residencial Grand Park", caracteristicas: "Una torre, 21 niveles, 207 departamentos", ubicacion: "Mateo Alemán Esq. Ferrocarril de Cuernavaca, Col. Ampliación Granada", atencion: "Be Grand / Grupo S3Z Sanz Arquitectos", instalaciones: ["Eléctrica M.T.", "Eléctrica B.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Conjunto Residencial Grand San Ángel Fase 1", caracteristicas: "Una torre de 23 niveles, 124 departamentos", ubicacion: "Calle de Iglesia No. 280 Esq. Eje 10 Sur, Col. Tizapán San Ángel", atencion: "Be Grand / Grupo S3Z Sanz Arquitectos", instalaciones: ["Calentamiento central", "Eléctrica M.T.", "Eléctrica B.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Conjunto Residencial Grand San Ángel Fase 2", caracteristicas: "Una torre de 31 niveles, 265 departamentos", ubicacion: "Calle de Iglesia No. 280 Esq. Eje 10 Sur, Col. Tizapán San Ángel", atencion: "Be Grand / Grupo S3Z Sanz Arquitectos", instalaciones: ["Calentamiento central", "Eléctrica M.T.", "Eléctrica B.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Conjunto Residencial Be Grand Lomas T1 y T2", caracteristicas: "Dos torres de 21 y 20 niveles, 192 departamentos", ubicacion: "Carretera Federal México–Toluca No. 3037, Col. Paseo de las Lomas", atencion: "Be Grand / Grupo S3Z Sanz Arquitectos", instalaciones: ["Eléctrica", "Hidrosanitaria", "PCI"] },
      { nombre: "Conjunto Residencial Be Grand Lomas T3 y T4", caracteristicas: "Tres torres, 20 niveles, 120 departamentos", ubicacion: "Carretera Federal México–Toluca No. 3037, Col. Paseo de las Lomas", atencion: "Be Grand / Grupo S3Z Sanz Arquitectos", instalaciones: ["Eléctrica", "Hidrosanitaria", "PCI"] },
      { nombre: "Casa Club Be Grand Park Canoa", caracteristicas: "Amenidades / casa club", ubicacion: "Amenidades en la Casona Eje 10 Sur, Col. Tizapán San Ángel", atencion: "Sr. Nicolás Carrancedo / Arq. Ricardo Sanz", instalaciones: ["Eléctrica", "Hidrosanitaria"] },
      { nombre: "Conjunto Residencial Be Grand Pedregal", caracteristicas: "Una torre de 29 niveles, 314 departamentos", ubicacion: "Periférico Sur No. 3201, Col. Pedregal", atencion: "Be Grand / Grupo S3Z", instalaciones: ["Calentamiento central", "Eléctrica", "Hidrosanitaria", "PCI"] },
      { nombre: "Conjunto Residencial Be Grand Alto Pedregal", caracteristicas: "Dos torres de 30 niveles, 331 departamentos", ubicacion: "Anillo Periférico Blvd. Adolfo López Mateos 5146, Pedregal de Carrasco, Coyoacán, CDMX", atencion: "Be Grand / Grupo S3Z Sanz Arquitectos", instalaciones: ["Eléctrica", "Hidrosanitaria", "PCI"] },
      { nombre: "Conjunto Residencial Be Grand Contadero", caracteristicas: "Dos torres", ubicacion: "Carretera México–Toluca 5804, Contadero, Cuajimalpa de Morelos, CDMX", atencion: "Be Grand / Grupo S3Z Sanz Arquitectos", instalaciones: ["Calentamiento central", "Eléctrica", "Hidrosanitaria", "PCI"] },
      { nombre: "Conjunto Residencial Be Grand Reforma", caracteristicas: "Edificio de 49 niveles, 588 departamentos", ubicacion: "Lafragua 13, Tabacalera, Cuauhtémoc, CDMX", atencion: "Be Grand / Grupo S3Z Sanz Arquitectos", instalaciones: ["Calentamiento central", "Eléctrica", "Hidrosanitaria", "PCI"] },
    ],
  },
  {
    id: "turisticos",
    label: "Desarrollo turístico y residencial vacacional",
    labelCorto: "Desarrollos turísticos",
    proyectos: [
      { nombre: "Condominio La Costa", caracteristicas: "Una torre", ubicacion: "Cancún", atencion: "Arq. Abraham Zabludovski", instalaciones: ["Desarrollo de proyecto", "Eléctrica M.T.", "Eléctrica B.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Residencial Torre Palma", caracteristicas: "18 niveles y 36 departamentos", ubicacion: "Comandante Fernando Silíceo, Acapulco, Gro.", atencion: "Arq. Gorsthein-Fasja / Lic. Daniel Liwerant", instalaciones: ["Eléctrica M.T.", "Eléctrica B.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Residencial Torre Mallorca", caracteristicas: "18 niveles y 36 departamentos", ubicacion: "Comandante Fernando Silíceo, Acapulco, Gro.", atencion: "Arq. Gorsthein-Fasja / Lic. Daniel Liwerant", instalaciones: ["Eléctrica M.T.", "Eléctrica B.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Conjunto Residencial Porto Fino Vallarta", caracteristicas: "6 torres de 12 niveles y 220 departamentos", ubicacion: "Fracc. Marina Vallarta, Puerto Vallarta, Jalisco", atencion: "Sr. Elías Sacal Cababie / Arq. Ricardo Sanz", instalaciones: ["Eléctrica M.T.", "Eléctrica B.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Residencial Bay View Grand Venetian Puerto Vallarta", caracteristicas: "140 departamentos, Torre Mil, 18 niveles", ubicacion: "Río Santiago 201, Fluvial Vallarta, Puerto Vallarta, Jalisco", atencion: "Sr. Elías Sacal Cababie / Arq. Ricardo Sanz", instalaciones: ["Eléctrica", "Hidrosanitaria", "PCI"] },
      { nombre: "Residencial Torre Palladio", caracteristicas: "18 niveles y 72 departamentos", ubicacion: "Acapulco, Gro.", atencion: "Lic. Daniel Liwerant / Sr. Marcos Fastlicht", instalaciones: ["Eléctrica M.T.", "Eléctrica B.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Residencial Bay View Grand Condominiums", caracteristicas: "480 departamentos, 10 torres, 13 niveles", ubicacion: "Puerto Vallarta, Jalisco", atencion: "Sr. Elías Sacal Cababie / Arq. Ricardo Sanz", instalaciones: ["Eléctrica M.T.", "Eléctrica B.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Conjunto Residencial Maralago Acapulco", caracteristicas: "7 torres, 12 niveles y 172 departamentos", ubicacion: "Av. Costera de las Palmas, Acapulco Diamante", atencion: "GICSA / Arq. Rafael Harari / Arq. Ricardo Sanz", instalaciones: ["Eléctrica M.T.", "Eléctrica B.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Hotel Ma. Isabel Sheraton", caracteristicas: "Remodelación de cocina principal, cocina italiana, cocina kosher, lavandería y cuarto de máquinas", ubicacion: "Sheraton Cd. de México Reforma", atencion: "Ing. Raúl Forgach / Lic. Daniel Liwerant", instalaciones: ["Eléctrica", "Hidrosanitaria", "PCI"] },
      { nombre: "Bay View Grand Ixtapa Residencial", caracteristicas: "176 departamentos, 3 torres, 14 niveles", ubicacion: "Marina Ixtapa, Ixtapa Zihuatanejo", atencion: "Sr. Elías Sacal Cababie / Arq. Ricardo Sanz", instalaciones: ["Eléctrica M.T.", "Eléctrica B.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Conjunto Residencial Las Olas Acapulco", caracteristicas: "110 departamentos, 10 torres", ubicacion: "Av. Costera de las Palmas, Acapulco, Gro.", atencion: "GICSA / Arq. Rafael Harari / Arq. Ricardo Sanz", instalaciones: ["Eléctrica M.T.", "Eléctrica B.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Bay View Grand Porto Chervo Residencial", caracteristicas: "36 departamentos, 3 torres, 7 niveles", ubicacion: "Av. Costera Guitarrón, Las Brisas, Acapulco, Gro.", atencion: "Sr. Elías Sacal Cababie / Arq. Ricardo Sanz", instalaciones: ["Eléctrica M.T.", "Eléctrica B.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Residencial Torre Ibiza", caracteristicas: "18 niveles y 36 departamentos", ubicacion: "Comandante Fernando Silíceo, Acapulco, Gro.", atencion: "Arq. Gorsthein-Fasja / Lic. Daniel Liwerant / Arq. Ricardo Sanz", instalaciones: ["Eléctrica", "Hidrosanitaria", "PCI"] },
    ],
  },
  {
    id: "interes-social",
    label: "Desarrollo habitacional de interés social",
    labelCorto: "Interés Social",
    proyectos: [
      { nombre: "STPRM Conjunto Habitacional", caracteristicas: "83 edificios, 830 departamentos", ubicacion: "Margarita Maza de Juárez y Vallejo, México D.F.", atencion: "Lic. Daniel Liwerant / Sr. Marcos Fastlicht", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria"] },
      { nombre: "STPRM Conjunto Urbano Azcapotzalco", caracteristicas: "Tres torres, 10 niveles", ubicacion: "México D.F.", atencion: "Lic. Daniel Liwerant / Sr. Marcos Fastlicht", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "STPRM Conjunto Habitacional Coaplaza", ubicacion: "México D.F.", atencion: "Arq. José Daniel K. / Sr. David Daniel K.", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria"] },
      { nombre: "STPRM Conjunto Habitacional Picacho", caracteristicas: "50 edificios, 500 departamentos", ubicacion: "México D.F.", atencion: "Lic. Daniel Liwerant / Sr. Marcos Fastlicht", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria"] },
      { nombre: "STPRM Conjunto Habitacional Carrillo Puerto", caracteristicas: "Tres edificios de 13 niveles, 156 departamentos", ubicacion: "Carrillo Puerto, México D.F.", atencion: "Lic. Daniel Liwerant / Sr. Marcos Fastlicht", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Conjunto Bosques del Valle", caracteristicas: "Dos torres de 7 niveles", ubicacion: "Fracc. Bosques del Valle, Estado de México", atencion: "Lic. Daniel Liwerant / Sr. Marcos Fastlicht", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria"] },
      { nombre: "Conjunto Habitacional Izcalli", ubicacion: "Fracc. Izcalli, Coacalco, Estado de México", atencion: "Lic. Ricardo Weitz", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria"] },
      { nombre: "Conjunto Habitacional Promotora de Desarrollo Urbano, S.A.", ubicacion: "Parque Residencial Coacalco, Estado de México", atencion: "Lic. Ricardo Weitz", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria"] },
      { nombre: "Conjunto Urbano Rosarito Pemex", ubicacion: "Rosarito, Baja California", atencion: "Lic. Daniel Liwerant / Sr. Marcos Fastlicht", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Conjunto Urb. Villahermosa Pemex", ubicacion: "Villahermosa, Tabasco", atencion: "Lic. Daniel Liwerant / Sr. Marcos Fastlicht", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Unidad Hab. Coacalco Constructora Alpad", ubicacion: "Parque Residencial Coacalco", atencion: "Lic. Roberto Weitz", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria"] },
      { nombre: "STPRM Conjunto Habitacional Torres Pancardo", ubicacion: "Poza Rica, Veracruz", atencion: "Lic. Daniel Liwerant / Sr. Marcos Fastlicht", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
    ],
  },
  {
    id: "oficinas-industria",
    label: "Desarrollo de oficinas, corporativos e industria",
    labelCorto: "Oficinas, corporativos e industria",
    proyectos: [
      { nombre: "Edificio de Oficinas Torre Anáhuac SEDESOL", caracteristicas: "Torre de 25 niveles", ubicacion: "Paseo de la Reforma Esq. La Fragua, México D.F.", atencion: "Sr. Elías Sacal Cababie / Arq. Harari / Arq. Ricardo Sanz", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Edificio de Oficinas Torre Monterrey, sede de la Secretaría de Salud", caracteristicas: "Torre de 12 niveles", ubicacion: "Monterrey", atencion: "Sr. Elías Sacal Cababie / Arq. Ricardo Sanz", instalaciones: ["Eléctrica M.T.", "Eléctrica B.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Yoli, Coca-Cola de Acapulco", ubicacion: "Av. Costera de las Palmas, Acapulco, Gro.", atencion: "Arq. Francisco Serrano / Arq. Pablo Serrano / Lic. Daniel Liwerant / Sr. Marcos Fastlicht", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Industria Textil Ligera", caracteristicas: "Edificio", ubicacion: "Av. Del Taller, México D.F.", atencion: "Sr. Roberto Sarraf / Arq. Ricardo Sanz", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Industria Textil de Grabado", ubicacion: "Calz. de la Viga, México D.F.", atencion: "Desarrollos Int. Textiles / Arq. Ricardo Sanz", instalaciones: ["Eléctrica M.T.", "Eléctrica B.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Industria Textil de Tejido", ubicacion: "Lago Iseo 236, Col. Anáhuac, México D.F.", atencion: "Sr. Alfonso Entebi / Arq. Ricardo Sanz", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Encajes Europeos, S.A.", caracteristicas: "Planta textil", ubicacion: "Aragón, México D.F.", atencion: "Lic. Miguel K.", instalaciones: ["Eléctrica"] },
      { nombre: "Canon Mill, S.A.", caracteristicas: "Planta de medias para dama", ubicacion: "San Francisco Soyaniquilpan, Estado de México", atencion: "Sr. Salomón Balas", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria"] },
      { nombre: "Canon Mill, S.A. — Chapa de Mota", caracteristicas: "Planta de medias para dama", ubicacion: "Chapa de Mota / San Bartolo, Estado de México", atencion: "Sr. Salomón Balas", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria"] },
      { nombre: "Prefabricados Roga, S.A.", ubicacion: "Kilómetro 25, Carretera México–Querétaro", atencion: "Arq. Conrado Montaño", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria"] },
      { nombre: "Brava, S.A.", caracteristicas: "Fabricación de casetas automotrices de fibra de vidrio", ubicacion: "Cuautitlán Izcalli, Estado de México", atencion: "Lic. Cauduro / Arq. Conrado Montaño", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria"] },
      { nombre: "Proyecto Novotex", ubicacion: "Autopista Querétaro, Kilómetro 25", atencion: "Sr. Jaime Micha", instalaciones: ["Eléctrica M.T.", "Eléctrica B.T."] },
      { nombre: "Textivisión", caracteristicas: "Fabricación de tela de acrílico elástica", ubicacion: "Fulton Esq. Toltecas, Tlalnepantla", atencion: "Sr. Rafael Cababie / Ing. Jaime Jalife / Arq. Ricardo Sanz", instalaciones: ["Eléctrica M.T.", "Eléctrica B.T.", "Hidrosanitaria", "PCI"] },
    ],
  },
  {
    id: "comercial",
    label: "Desarrollo comercial y restaurantes",
    labelCorto: "Centros comerciales y restaurantes",
    proyectos: [
      { nombre: "Suburbia Parroquia Plaza Universidad", caracteristicas: "Remodelación", ubicacion: "Parroquia esq. Holbein, Sta. Cruz, México D.F.", atencion: "Grupo Cifra / Lic. Daniel Liwerant / Sr. Marcos Fastlicht", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Suburbia Plaza Henry Ford", caracteristicas: "Remodelación", ubicacion: "Calzada la Villa", atencion: "Grupo Cifra / Lic. Daniel Liwerant / Sr. Marcos Fastlicht", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Centro Comercial Pasaje Capital", caracteristicas: "Remodelación", ubicacion: "20 de Noviembre a la calle de Pino Suárez", atencion: "Sr. Jaime Zonana Esquenazi / Arq. Ricardo Sanz", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Suburbia Saldos", caracteristicas: "Remodelación", ubicacion: "Acueducto de Guadalupe, México D.F.", atencion: "Grupo Cifra / Lic. Daniel Liwerant / Sr. Marcos Fastlicht", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Centro Comercial Pallodio Center Ascamill", ubicacion: "Acapulco, Gro.", atencion: "Lic. Daniel Liwerant / Sr. Marcos Fastlicht", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria"] },
      { nombre: "Bodega Aurrera Center", caracteristicas: "Remodelación", ubicacion: "Pachuca, Hidalgo", atencion: "Lic. Daniel Liwerant / Sr. Marcos Fastlicht", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Vip's", ubicacion: "Calz. de la Viga, México D.F.", atencion: "Lic. Daniel Liwerant / Sr. Marcos Fastlicht", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Vip's", ubicacion: "Naucalpan", atencion: "Lic. Daniel Liwerant / Sr. Marcos Fastlicht", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Vip's", ubicacion: "Mundo E, Estado de México", atencion: "Lic. Daniel Liwerant / Sr. Marcos Fastlicht", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Vip's", ubicacion: "Plaza Dorada, Puebla, México", atencion: "Lic. Daniel Liwerant / Sr. Marcos Fastlicht", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "El Portón", ubicacion: "Pachuca, Hidalgo", atencion: "Lic. Daniel Liwerant / Sr. Marcos Fastlicht", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Daruma", ubicacion: "Plaza Lilas, Bosque de las Lomas", atencion: "Arq. Ricardo Sanz", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
    ],
  },
  {
    id: "institucional",
    label: "Desarrollo institucional, cultural, educativo, religioso y automotriz",
    labelCorto: "Cultural, colegios, templos y agencias",
    proyectos: [
      { nombre: "Centro Cultural y Recreativo Israelita de México — Secundaria y Preparatoria", ubicacion: "Lomas del Recuerdo No. 44", atencion: "Sr. Aaron Jaet / Arq. Salomón Gorsthein / Lic. Daniel Liwerant / Sr. Marcos Fastlicht", instalaciones: ["Eléctrica M.T.", "Eléctrica B.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Centro Cultural y Recreativo Israelita de México — Edificio Administrativo", ubicacion: "Lomas del Recuerdo No. 44", atencion: "Ing. Yuri Tartakoski / Arq. Julio Tartakoski", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Templo Eliyahu", ubicacion: "Fuente de Templanza / Fuente de la Huerta, Tecamachalco", atencion: "Arq. Rafael Salame / Arq. Elías Fasja / Arq. Salomón Gorsthein", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Tevila", ubicacion: "Fuente de la Huerta, Tecamachalco", atencion: "Arq. Rafael Salame / Arq. Elías Fasja / Arq. Salomón Gorsthein", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Colegio Alemán Alexander Von Humboldt A.C. — Plantel La Herradura", ubicacion: "Bosque de Montezuma No. 134, Estado de México", atencion: "Arq. Aurelio Nuño / Arq. Nuño de Buen Mac Gregor", instalaciones: ["Eléctrica M.T.", "Eléctrica B.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Automotriz Hermes Mercedes Benz", ubicacion: "Periférico Sur, México D.F.", atencion: "Arq. Ricardo Sanz", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Nissan", ubicacion: "Lomas Verdes, Estado de México", atencion: "Lic. Andrés Ocejo / Arq. Ricardo Sanz", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
      { nombre: "Suzuki Polanco", ubicacion: "Av. Miguel de Cervantes Saavedra No. 388", atencion: "Arq. Ricardo Sanz", instalaciones: ["Eléctrica M.T.", "Hidrosanitaria", "PCI"] },
    ],
  },
];

/* ─── Gallery types + data ───────────────────────────────── */
type GalleryItem = {
  src: string;
  alt: string;
  titulo: string;
  descripcion: string;
};
const TITULOS_PROYECTOS = [
  "Residencial Torre Palladio",
  "Conjunto Residencial Las Olas Acapulco",
  "Be Grand Reforma",
  "Bay View Grand Venetian Puerto Vallarta",
  "Residencial Maralago Acapulco",
  "Grand San Ángel",
  "Bay View Grand Venetian Puerto Vallarta",
  "Be Grand Lomas",
  "Residencial Torre Mallorca",
  "Hotel Ma. Isabel Sheraton",
  "Residencial Torre Ibiza",
  "Be Grand Alto Pedregal",
  "Be Grand Contadero",
  "Residencial Royal Reforma",
  "Be Grand Contadero",
  "Residencial Grand Polanco",
  "Colegio Alemán Alexander Von Humboldt A.C.",
  "Residencial Grand Polanco",
  "Canon Mills, S.A.",
  "Automotriz Hermer Mercedes Benz",
];
const DESC_PH = "";
const galleryProyectos: GalleryItem[] = Array.from({ length: 20 }, (_, i) => ({
  src:
  i === 0
    ? torrePalladio01
    : i === 1
      ? lasOlasAcapulco01
      : i === 2
        ? beGrandReforma01
        : i === 3
          ? venetianPuertoVallarta02
          : i === 4
            ? maralagoAcapulco02
            :i === 5
  ? beGrandSanAngel01
  : i === 6
    ? venetianPuertoVallarta01
    : i === 7
      ? beGrandLomas01
      : i === 8
  ? torrePalmaMayorca01
  : i === 9
  ? sheraton01
  : i === 10
    ? torreIbiza01
    : i === 11
    ? beGrandAltoPedregal1
     : i === 12
    ? beGrandContaderoAmenidades01
    : i === 13
    ? residencialRoyalReforma01
     : i === 14
    ? beGrandContadero02
     : i === 15
    ? grandPolanco02
     : i === 16
    ? colegioAleman01
      : i === 17
    ? grandPolanco01
     : i === 18
    ? cannonMills01
     : i === 19
    ? hermerMercedesBenz01
    : placeholderProyectos,
  alt: `Proyecto destacado ${i + 1}`,
titulo: TITULOS_PROYECTOS[i],
  descripcion: DESC_PH,
}));

/* ─── Tag color helper ───────────────────────────────────── */
function tagStyle(tag: string): React.CSSProperties {
  if (tag === "PCI")             return { background: "rgba(224,90,43,0.12)", color: "#C0522A", border: "1px solid rgba(224,90,43,0.2)" };
  if (tag.startsWith("Eléctrica")) return { background: "rgba(14,122,196,0.1)", color: "#0A6EB0", border: "1px solid rgba(14,122,196,0.2)" };
  if (tag === "Hidrosanitaria")  return { background: "rgba(33,200,246,0.1)", color: "#0EA8D4", border: "1px solid rgba(33,200,246,0.22)" };
  if (tag === "Calentamiento central") return { background: "rgba(180,120,30,0.1)", color: "#9A6A10", border: "1px solid rgba(180,120,30,0.2)" };
  return { background: "rgba(90,122,148,0.1)", color: "#4A6A88", border: "1px solid rgba(90,122,148,0.2)" };
}

/* ─── Chatbot Q&A ────────────────────────────────────────── */
type ChatMsg = { role: "user" | "bot"; text: string };

const chatSugerencias = [
  "¿Qué servicios ofrecen?",
  "¿Cuánta experiencia tienen?",
  "¿En qué sectores trabajan?",
  "¿Quién es el Ing. Bárcena?",
  "¿Qué proyectos han realizado?",
  "¿Cuáles son sus teléfonos?",
  "¿Cuál es su correo electrónico?",
  "¿Dónde están ubicados?",
  "¿Cómo solicitar una asesoría?",
  "¿Cómo los contacto?",
];

const chatRespuestas: Record<string, string> = {
  "¿Qué servicios ofrecen?":
    "En BAAR ofrecemos cuatro servicios principales:\n• Ingeniería Hidrosanitaria: sistemas hidráulicos, sanitarios, pluviales, agua tratada, calentamiento central y protección contra incendio.\n• Ingeniería Eléctrica: media y baja tensión, alumbrado, fuerza, telecomunicaciones, tierras y pararrayos.\n• Ingeniería y Desarrollo de Proyectos: proyecto ejecutivo, memorias de cálculo, isométricos, diagramas unifilares y documentación técnica.\n• Acompañamiento Integral: desde la planeación hasta la entrega y puesta en marcha.",
  "¿Cuánta experiencia tienen?":
    "La trayectoria que respalda a BAAR supera los 40 años. El Ing. Felipe G. Bárcena Sánchez ha participado en el desarrollo de más de 5,377 departamentos con instalaciones construidas, en proyectos habitacionales, turísticos, comerciales e industriales a lo largo de México. BAAR Instalaciones Aplicadas, S.A. de C.V. se constituyó formalmente en 2023 para reunir ese conocimiento.",
  "¿En qué sectores trabajan?":
    "Desarrollamos proyectos en múltiples sectores:\n• 23 Edificios habitacionales\n• 13 Desarrollos turísticos (Cancún, Acapulco, Puerto Vallarta, Ixtapa)\n• 13 Viviendas de interés social\n• 7 Plantas industriales\n• 6 Restaurantes y centros culturales\n• 4 Centros comerciales\n• 3 Agencias automotrices\n• 2 Edificios de oficinas\n• 2 Viviendas de lujo\n• 1 Hotel",
  "¿Quién es el Ing. Bárcena?":
    "El Ing. Felipe G. Bárcena Sánchez es el fundador de BAAR Instalaciones Aplicadas. Con más de cuatro décadas de trayectoria, ha liderado el desarrollo de instalaciones hidrosanitarias y eléctricas en proyectos de gran escala, colaborando con firmas de reconocido prestigio como Be Grand y S3Z Arquitectos. Su experiencia abarca más de 5,377 departamentos desarrollados y 84 proyectos en distintos sectores.",
  "¿Qué proyectos han realizado?":
    "Nuestra trayectoria incluye desarrollos emblemáticos como:\n• Be Grand Reforma (49 niveles, 588 depts., CDMX)\n• Be Grand Pedregal (29 niveles, 314 depts.)\n• Bay View Grand Condominiums (480 depts., Puerto Vallarta)\n• Conjunto Residencial Maralago (172 depts., Acapulco)\n• Grand Polanco Poniente (286 depts.)\n• STPRM Conjunto Habitacional (830 depts.)\nY más de 70 proyectos adicionales en todo México.",
  "¿Cuáles son sus teléfonos?":
    "Puede comunicarse con nosotros por teléfono en los siguientes números:\n\n📞 Administrativa:\n55 9385 8773\n\n🔧 Técnica:\n55 7163 9013\n55 5088 0803\n\nNuestro horario de atención es de lunes a viernes en horario de oficina.",
  "¿Cuál es su correo electrónico?":
    "Puede escribirnos al siguiente correo electrónico:\n\n✉️ instalacionesaplicadasbaar@gmail.com\n\nTambién puede visitarnos en nuestro sitio web:\n🌐 baarinstalacionesaplicadas.info\n\nResponderemos su mensaje a la brevedad posible.",
  "¿Dónde están ubicados?":
    "Nuestra oficina está ubicada en:\n\n📍 Puente 66 B\nFracc. Jardines del Sur\nXochimilco, Ciudad de México\nC.P. 16050\n\nPuede contactarnos antes de su visita al número administrativo 55 9385 8773 para coordinar una reunión.",
  "¿Cómo solicitar una asesoría?":
    "Para solicitar una asesoría tiene dos opciones:\n\n1️⃣ Formulario en línea:\nAcceda directamente a nuestro formulario de contacto en la sección Contacto de este sitio. Le redirigirá a una forma rápida para enviarnos su consulta.\n\n2️⃣ Contacto directo:\n📞 Administrativa: 55 9385 8773\n📞 Técnica: 55 7163 9013 / 55 5088 0803\n✉️ instalacionesaplicadasbaar@gmail.com\n\nResolveremos su consulta con la mayor brevedad.",
  "¿Cómo los contacto?":
    "Puede comunicarse con nosotros por cualquiera de estos medios:\n\n📞 Administrativa: 55 9385 8773\n📞 Técnica: 55 7163 9013 / 55 5088 0803\n✉️ instalacionesaplicadasbaar@gmail.com\n🌐 baarinstalacionesaplicadas.info\n📍 Puente 66 B, Fracc. Jardines del Sur, Xochimilco, CDMX, C.P. 16050\n\nTambién puede usar el formulario de asesoría en la sección Contacto de este sitio.",
};

const botBienvenida =
  "Hola, soy el asistente de BAAR Instalaciones Aplicadas. Puedo orientarle sobre nuestros servicios, experiencia y proyectos. ¿En qué puedo ayudarle?";

/* ─── GalleryCard ────────────────────────────────────────── */
function GalleryCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="cursor-pointer select-none"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container — clips the zoom */}
      <div
        className="relative rounded-xl overflow-hidden"
        style={{ aspectRatio: "4/3" }}
      >
        <ImageWithFallback
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover object-center"
          style={{
            transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        />
        {/* Desktop overlay — visible on hover */}
        <div
          className="absolute inset-0 hidden md:flex flex-col justify-end p-4"
          style={{
            background: "linear-gradient(to top, rgba(13,27,42,0.88) 0%, rgba(13,27,42,0.3) 55%, transparent 100%)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
          }}
        >
          <h4
            className="text-white font-bold text-sm leading-snug"
            style={{
              transform: hovered ? "translateY(0)" : "translateY(6px)",
              transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {item.titulo}
          </h4>
          <p
            className="text-white/65 text-xs mt-1 leading-relaxed line-clamp-2"
            style={{
              fontFamily: "'Inter', sans-serif",
              transform: hovered ? "translateY(0)" : "translateY(6px)",
              transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1) 0.04s",
            }}
          >
            {item.descripcion}
          </p>
        </div>
      </div>
      {/* Mobile — title always visible below */}
      <div className="md:hidden pt-2 px-0.5">
        <h4 className="text-sm font-bold leading-snug" style={{ color: NAVY }}>
          {item.titulo}
        </h4>
        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed line-clamp-2" style={{ fontFamily: "'Inter', sans-serif" }}>
          {item.descripcion}
        </p>
      </div>
    </div>
  );
}

/* ─── Lightbox ───────────────────────────────────────────── */
function Lightbox({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
      style={{ background: "rgba(5,10,18,0.94)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
    >
      <motion.div
        className="relative flex flex-col w-full max-w-4xl"
        style={{ maxHeight: "90dvh" }}
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-11 right-0 flex items-center gap-1.5 text-white/50 hover:text-white transition-colors text-sm"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <X size={18} /> Cerrar
        </button>

        {/* Image — contain to never crop */}
        <div
          className="rounded-2xl overflow-hidden flex items-center justify-center flex-1 min-h-0"
          style={{ background: "rgba(255,255,255,0.04)", maxHeight: "72dvh" }}
        >
          <ImageWithFallback
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-contain"
            style={{ maxHeight: "72dvh" }}
          />
        </div>

        {/* Info */}
        <div className="mt-4 px-1">
          <h3 className="text-white font-bold text-lg leading-snug">{item.titulo}</h3>
          <p className="text-white/55 text-sm mt-1 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            {item.descripcion}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── FadeIn ─────────────────────────────────────────────── */
function FadeIn({ children, delay = 0, direction = "up", className = "" }: {
  children: React.ReactNode; delay?: number; direction?: "up" | "left" | "right" | "none"; className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: direction === "up" ? 28 : 0, x: direction === "left" ? -28 : direction === "right" ? 28 : 0 }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >{children}</motion.div>
  );
}

/* ─── Section label ──────────────────────────────────────── */
function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <div className="h-px w-8" style={{ background: CYAN }} />
      <span className="text-xs font-semibold tracking-[0.2em] uppercase"
        style={{ color: light ? CYAN : BLUE, fontFamily: "'Inter', sans-serif" }}>
        {children}
      </span>
    </div>
  );
}

/* ─── Project Card ───────────────────────────────────────── */
function ProyectoCard({ p }: { p: Proyecto }) {
  return (
    <div
      className="rounded-2xl p-5 flex flex-col gap-3 h-full"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(13,27,42,0.08)",
        boxShadow: "0 2px 12px rgba(13,27,42,0.05)",
      }}
    >
      <h4 className="text-sm font-bold leading-snug" style={{ color: NAVY }}>
        {p.nombre}
      </h4>
      {p.caracteristicas && (
        <p className="text-xs text-gray-400 leading-snug" style={{ fontFamily: "'Inter', sans-serif" }}>
          {p.caracteristicas}
        </p>
      )}
      <div className="flex items-start gap-1.5 mt-auto">
        <MapPin size={11} className="flex-shrink-0 mt-0.5" style={{ color: "#9CA3AF" }} />
        <span className="text-xs text-gray-400 leading-snug" style={{ fontFamily: "'Inter', sans-serif" }}>
          {p.ubicacion}
        </span>
      </div>
      {p.atencion && (
        <p className="text-xs text-gray-300 leading-snug truncate" style={{ fontFamily: "'Inter', sans-serif" }}>
          {p.atencion}
        </p>
      )}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {p.instalaciones.map((tag) => (
          <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded-md" style={tagStyle(tag)}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── App ────────────────────────────────────────────────── */
export default function App() {
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [tabActivo,     setTabActivo]     = useState(0);
  const [lightboxItem,  setLightboxItem]  = useState<GalleryItem | null>(null);
  const [chatOpen,      setChatOpen]      = useState(false);
  const [chatMsgs,   setChatMsgs]   = useState<ChatMsg[]>([{ role: "bot", text: botBienvenida }]);
  const [chatInput,  setChatInput]  = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const enviarMensaje = (texto: string) => {
    if (!texto.trim()) return;
    const respuesta = chatRespuestas[texto] ?? "Gracias por su consulta. Para información más detallada, le invitamos a contactarnos directamente al 55 9385 8773 o a través de nuestro formulario en la sección Contacto.";
    setChatMsgs((prev) => [
      ...prev,
      { role: "user", text: texto },
      { role: "bot",  text: respuesta },
    ]);
    setChatInput("");
    setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }), 80);
  };

  useEffect(() => {
    /* ── Título y idioma ── */
    document.title = "BAAR Instalaciones Aplicadas | Ingeniería Hidrosanitaria y Eléctrica";
    document.documentElement.lang = "es-MX";

    /* ── Favicon ── */
    const setFavicon = (href: string) => {
      (["icon", "shortcut icon", "apple-touch-icon"] as const).forEach((rel) => {
        let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
        if (!el) { el = document.createElement("link"); el.rel = rel; document.head.appendChild(el); }
        el.href = href;
      });
    };
    setFavicon(baarFavicon);

    /* ── Meta tags ── */
    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.content = content;
    };
    const title = "BAAR Instalaciones Aplicadas | Ingeniería Hidrosanitaria y Eléctrica";
    const desc  = "Más de 40 años desarrollando soluciones de ingeniería hidrosanitaria, eléctrica y de protección contra incendio para proyectos habitacionales, turísticos, comerciales e institucionales en México.";
    setMeta("description", desc);
    setMeta("og:type",        "website",  true);
    setMeta("og:title",       title,      true);
    setMeta("og:description", desc,       true);
    setMeta("og:site_name",   "BAAR Instalaciones Aplicadas", true);
    setMeta("og:locale",      "es_MX",    true);
    setMeta("og:image",       baarFavicon, true);
    setMeta("twitter:card",        "summary");
    setMeta("twitter:title",       title);
    setMeta("twitter:description", desc);
    setMeta("twitter:image",       baarFavicon);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: GRAY }}>
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(14,122,196,0.3); border-radius: 3px; }
      `}</style>

      {/* ══ HEADER ══════════════════════════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50"
        style={{ background: "#FFFFFF", borderBottom: "1px solid rgba(13,27,42,0.08)", boxShadow: "0 2px 12px rgba(13,27,42,0.06)" }}>
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between py-3">
          <a href="#" className="flex-shrink-0">
            <ImageWithFallback src={baarLogo} alt="BAAR Instalaciones Aplicadas" className="h-12 w-auto object-contain" />
          </a>
          <ul className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-xs lg:text-sm font-medium transition-colors duration-200 hover:opacity-70 whitespace-nowrap"
                  style={{ color: "#4D4D5F", fontFamily: "'Inter', sans-serif" }}>{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <a href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:translate-y-[-1px]"
              style={{ background: BLUE }}>
              Contactar <ArrowRight size={15} />
            </a>
          </div>
          <button className="md:hidden p-2 rounded-md" style={{ color: "#4D4D5F" }}
            onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
            className="md:hidden px-6 pb-5 pt-1"
            style={{ background: "#FFFFFF", borderTop: "1px solid rgba(13,27,42,0.07)" }}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="block py-3.5 text-sm font-medium border-b"
                style={{ color: "#4D4D5F", borderColor: "rgba(13,27,42,0.07)", fontFamily: "'Inter', sans-serif" }}>
                {l.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white justify-center"
              style={{ background: BLUE }}>
              Contactar <ArrowRight size={15} />
            </a>
          </motion.div>
        )}
      </header>

      {/* ══ HERO ════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: NAVY }}>
        <div className="absolute inset-0">
          <ImageWithFallback src={heroPhoto} alt="Desarrollos habitacionales de alta especialización en México"
            className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(13,27,42,0.93) 42%, rgba(13,27,42,0.70) 65%, rgba(13,27,42,0.35) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,27,42,0.45) 0%, transparent 18%, transparent 78%, rgba(13,27,42,0.55) 100%)" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(33,200,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(33,200,246,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28 pb-20 lg:pt-36 lg:pb-28">
          <div className="max-w-2xl lg:max-w-[680px]">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="inline-flex items-center gap-2 mb-8">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold"
                style={{ borderColor: "rgba(33,200,246,0.35)", background: "rgba(33,200,246,0.08)", color: CYAN, fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}>
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: CYAN }} />
                Más de 40 años de experiencia
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.04] tracking-tight mb-6">
              Ingeniería que<br />
              <span style={{ background: `linear-gradient(135deg, ${BLUE} 0%, ${CYAN} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                construye confianza.
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg font-medium text-white/75 leading-relaxed mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              Más de 40 años transformando el horizonte urbano de México con instalaciones hidrosanitarias y eléctricas de alta especialización.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 mb-14">
              <a href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 hover:translate-y-[-2px]"
                style={{ background: `linear-gradient(135deg, ${BLUE} 0%, #0A5E99 100%)`, boxShadow: "0 8px 24px rgba(14,122,196,0.35)" }}>
                Solicitar asesoría <ArrowRight size={16} />
              </a>
              <a href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white/80 border transition-all duration-200 hover:text-white hover:border-white/40 hover:bg-white/5"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Conocer nuestros servicios <ChevronRight size={16} />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}>
              <div className="h-px w-full mb-8" style={{ background: "rgba(255,255,255,0.08)" }} />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {[
                  { icon: Clock,     label: "+40 años de experiencia" },
                  { icon: Settings2, label: "Ingeniería especializada" },
                  { icon: Layers,    label: "Soluciones integrales" },
                  { icon: Star,      label: "Proyectos de alta especialización" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                      style={{ background: "rgba(33,200,246,0.1)", border: "1px solid rgba(33,200,246,0.2)" }}>
                      <Icon size={15} style={{ color: CYAN }} />
                    </div>
                    <span className="text-xs font-medium text-white/60 leading-snug" style={{ fontFamily: "'Inter', sans-serif" }}>{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ SERVICIOS ═══════════════════════════════════════ */}
      <section id="servicios" className="py-28" style={{ background: GRAY }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <SectionLabel>Nuestros servicios</SectionLabel>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
              <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight" style={{ color: NAVY, maxWidth: "520px" }}>
                Soluciones de ingeniería para cada proyecto
              </h2>
              <p className="text-base text-gray-500 leading-relaxed lg:max-w-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                Desarrollamos soluciones integrales de ingeniería hidrosanitaria y eléctrica para proyectos de alta complejidad, desde la planeación y el diseño hasta la ejecución y puesta en marcha.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicios.map((s, i) => {
              const Icon = s.icon;
              return (
                <FadeIn key={s.titulo} delay={i * 0.08}>
                  <div className="group h-full rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 hover:translate-y-[-3px]"
                    style={{ background: "#ffffff", border: "1px solid rgba(13,27,42,0.07)", boxShadow: "0 2px 16px rgba(13,27,42,0.06)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(14,122,196,0.15)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(14,122,196,0.25)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(13,27,42,0.06)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(13,27,42,0.07)"; }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}>
                      <Icon size={22} style={{ color: s.color }} />
                    </div>
                    <div className="flex flex-col flex-1">
                      <h3 className="text-base font-bold mb-2 leading-snug" style={{ color: NAVY }}>{s.titulo}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>{s.descripcion}</p>
                      <ul className="space-y-1.5 mt-auto">
                        {s.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: s.color }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ NOSOTROS — HISTORIA ══════════════════════════════ */}
      <section id="nosotros" className="pt-28 pb-0 overflow-hidden" style={{ background: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Nuestra Historia */}
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-start pb-20 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
            <FadeIn direction="left">
              <SectionLabel light>Nuestra Historia</SectionLabel>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-8">
                La experiencia construye el futuro
              </h2>
              <div className="space-y-5" style={{ fontFamily: "'Inter', sans-serif" }}>
                <p className="text-base text-white/65 leading-relaxed">
                  Aunque BAAR Instalaciones Aplicadas se constituye formalmente en 2023, su historia comenzó mucho antes.
                </p>
                <p className="text-base text-white/65 leading-relaxed">
                  Durante más de cuatro décadas, el Ing. Felipe Gerardo Bárcena Sánchez ha participado en el desarrollo de proyectos habitacionales, turísticos, comerciales e industriales que hoy forman parte del crecimiento urbano de México. Esa trayectoria, construida proyecto tras proyecto, dio origen a una empresa con una visión clara: ofrecer soluciones de ingeniería que combinan experiencia, precisión técnica y compromiso con la calidad.
                </p>
                <p className="text-base text-white/65 leading-relaxed">
                  BAAR nace para reunir ese conocimiento y convertirlo en una organización preparada para responder a los retos actuales de la construcción, desarrollando instalaciones hidrosanitarias y eléctricas que aportan seguridad, eficiencia y valor a largo plazo.
                </p>
                <p className="text-base text-white/65 leading-relaxed">
                  A lo largo de su trayectoria, la experiencia que respalda a BAAR ha contribuido al desarrollo de miles de unidades habitacionales y proyectos de gran escala, colaborando con firmas reconocidas como Be Grand y S3Z Arquitectos, consolidando una forma de trabajo basada en la confianza, la excelencia técnica y el cumplimiento.
                </p>
                <p className="text-base text-white/65 leading-relaxed">
                  Hoy esa experiencia continúa evolucionando mediante una ingeniería que integra innovación, eficiencia y soluciones preparadas para el futuro.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="grid grid-cols-2 gap-4 mb-4">
                {stats.map((s, i) => (
                  <div key={s.label} className="rounded-2xl p-6"
                    style={{ background: i % 2 === 0 ? "rgba(14,122,196,0.15)" : "rgba(33,200,246,0.08)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="text-4xl font-extrabold tracking-tight mb-1" style={{ color: i % 2 === 0 ? CYAN : "white" }}>{s.value}</div>
                    <div className="text-sm font-medium text-white/50 leading-snug" style={{ fontFamily: "'Inter', sans-serif" }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: CYAN, fontFamily: "'Inter', sans-serif" }}>Nuestra misión</p>
                <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Transformar desafíos técnicos en soluciones de ingeniería confiables, eficientes y bien coordinadas. Acompañamos a nuestros clientes desde la planeación hasta la ejecución, desarrollando instalaciones hidrosanitarias y eléctricas con precisión, conocimiento especializado y atención a las necesidades reales de cada proyecto. Nuestro propósito es facilitar una infraestructura segura, funcional y preparada para operar a largo plazo.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Quiénes Somos */}
          <div className="py-20">
            <FadeIn>
              <SectionLabel light>Quiénes Somos</SectionLabel>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-12" style={{ maxWidth: "680px" }}>
                En BAAR Instalaciones Aplicadas creemos que la ingeniería es mucho más que construir instalaciones
              </h2>
            </FadeIn>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
              <FadeIn direction="left" delay={0.08}>
                <div className="space-y-5" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <p className="text-base text-white/65 leading-relaxed">
                    En BAAR Instalaciones Aplicadas, S.A. de C.V. creemos que la ingeniería es mucho más que construir instalaciones: es crear la infraestructura que permite a las personas vivir, trabajar y desarrollarse con seguridad y confianza.
                  </p>
                  <p className="text-base text-white/65 leading-relaxed">
                    Somos una empresa mexicana con sede en la Ciudad de México, especializada en ingeniería hidrosanitaria y eléctrica para proyectos de alta complejidad, participando en desarrollos habitacionales verticales, complejos turísticos, edificios corporativos e infraestructura que exige precisión técnica y un alto nivel de especialización.
                  </p>
                  <p className="text-base text-white/65 leading-relaxed">
                    Respaldados por la experiencia del Ing. Felipe Bárcena Sánchez, con más de cuatro décadas de trayectoria y miles de unidades desarrolladas junto a firmas de reconocido prestigio como Be Grand y S3Z Arquitectos, integramos conocimiento, innovación y una ejecución rigurosa para ofrecer soluciones que generan valor desde la etapa de planeación hasta la entrega final.
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.12}>
                <div className="space-y-5" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <p className="text-base text-white/65 leading-relaxed">
                    Entendemos que la calidad no depende únicamente de la tecnología, sino de las personas que hacen posible cada proyecto. Por ello impulsamos una cultura basada en la excelencia técnica, el trabajo colaborativo y la mejora continua, formando equipos comprometidos con ofrecer resultados confiables en cada obra.
                  </p>
                  <p className="text-base text-white/65 leading-relaxed">
                    Más que desarrollar instalaciones, acompañamos a nuestros clientes en la construcción de infraestructura preparada para el futuro, donde la eficiencia, la seguridad y la sostenibilidad se convierten en parte del mismo proyecto.
                  </p>
                  <div className="pt-4">
                    <a href="#contacto"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:opacity-90"
                      style={{ background: BLUE, boxShadow: "0 8px 20px rgba(14,122,196,0.3)" }}>
                      Hablar con un especialista <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

        </div>
      </section>

      {/* ══ EXPERIENCIA PROFESIONAL ══════════════════════════ */}
      <section id="experiencia" className="py-28 overflow-hidden" style={{ background: GRAY }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <SectionLabel>Experiencia profesional</SectionLabel>
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start mt-4">

            {/* Foto */}
            <FadeIn direction="left">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl"
                  style={{ boxShadow: "0 32px 64px rgba(13,27,42,0.14)" }}>
                  <ImageWithFallback
                    src={ingFelipeFoto}
                    alt="Ing. Felipe G. Bárcena Sánchez — Fundador de BAAR Instalaciones Aplicadas"
                    className="w-full object-cover object-top"
                    style={{ aspectRatio: "4/5" }}
                  />
                </div>
                {/* Badge flotante */}
                <div className="absolute -bottom-5 -right-3 sm:-right-6 rounded-2xl px-5 py-4 shadow-xl"
                  style={{ background: NAVY, border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="text-2xl font-extrabold leading-none" style={{ color: CYAN }}>+40</div>
                  <div className="text-xs font-medium text-white/60 mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>años de trayectoria</div>
                </div>
              </div>
            </FadeIn>

            {/* Texto */}
            <FadeIn direction="right">
              <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-2" style={{ color: NAVY }}>
                Ing. Felipe G. Bárcena Sánchez
              </h2>
              <p className="text-sm font-semibold uppercase tracking-widest mb-8" style={{ color: BLUE, fontFamily: "'Inter', sans-serif" }}>
                Fundador · BAAR Instalaciones Aplicadas
              </p>

              {/* Dato principal */}
              <div className="rounded-2xl p-6 mb-8" style={{ background: NAVY }}>
                <div className="text-4xl font-extrabold mb-1" style={{ color: CYAN }}>5,377</div>
                <div className="text-base font-semibold text-white/80 leading-snug" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Más de 5,377 departamentos con instalaciones desarrolladas y construidas
                </div>
              </div>

              {/* Descripción extraída del perfil */}
              <div className="space-y-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                <p className="text-base text-gray-600 leading-relaxed">
                  Durante más de cuatro décadas, el Ing. Felipe Gerardo Bárcena Sánchez ha participado en el desarrollo de proyectos habitacionales, turísticos, comerciales e industriales que hoy forman parte del crecimiento urbano de México.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Su trayectoria incluye colaboraciones con firmas de reconocido prestigio como Be Grand y S3Z Arquitectos, desarrollando instalaciones hidrosanitarias y eléctricas en 84 proyectos de distintos sectores a lo largo del país: desde conjuntos residenciales verticales de alta especialización hasta desarrollos turísticos de gran escala en Cancún, Puerto Vallarta, Acapulco e Ixtapa Zihuatanejo.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Esa experiencia, construida proyecto tras proyecto y consolidada a lo largo de cuatro décadas, es el fundamento técnico y humano de BAAR Instalaciones Aplicadas.
                </p>
              </div>

              {/* Stats secundarias */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { value: "84",   label: "Proyectos realizados" },
                  { value: "13",   label: "Desarrollos turísticos" },
                  { value: "2023", label: "Año de constitución" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl p-4 text-center"
                    style={{ background: "rgba(14,122,196,0.07)", border: "1px solid rgba(14,122,196,0.15)" }}>
                    <div className="text-2xl font-extrabold" style={{ color: NAVY }}>{s.value}</div>
                    <div className="text-xs text-gray-500 mt-0.5 leading-snug" style={{ fontFamily: "'Inter', sans-serif" }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
                           <div
                className="mt-10 pt-8 border-t"
                style={{ borderColor: "rgba(13,27,42,0.1)" }}
              >
                <p
                  className="mb-5 text-3xl font-bold"
                  style={{
                    fontFamily: "'Segoe Script', 'Brush Script MT', cursive",
                    color: "#000000",
                  }}
                >
                  Sigamos en contacto.
                </p>
                <a
                  href="https://tally.so/r/Xxogyd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 hover:translate-y-[-2px]"
                  style={{ background: `linear-gradient(135deg, ${BLUE} 0%, #0A5E99 100%)`, boxShadow: "0 8px 24px rgba(14,122,196,0.28)" }}
                >
                  Solicitar asesoría <ExternalLink size={15} />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ VALORES ═════════════════════════════════════════ */}
      <section id="valores" className="py-24" style={{ background: GRAY }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-16">
            <SectionLabel>Nuestros valores</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mx-auto" style={{ color: NAVY, maxWidth: "480px" }}>
              Lo que nos define en cada proyecto
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeIn key={v.titulo} delay={i * 0.08}>
                  <div className="rounded-2xl p-7 h-full" style={{ background: "#ffffff", border: "1px solid rgba(13,27,42,0.07)", boxShadow: "0 2px 16px rgba(13,27,42,0.05)" }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: "rgba(14,122,196,0.1)", border: "1px solid rgba(14,122,196,0.2)" }}>
                      <Icon size={20} style={{ color: BLUE }} />
                    </div>
                    <h3 className="text-sm font-bold mb-2 leading-snug" style={{ color: NAVY }}>{v.titulo}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{v.descripcion}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ PROYECTOS — CARDS ═══════════════════════════════ */}
      <section id="proyectos" className="py-28" style={{ background: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <SectionLabel light>Trayectoria</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-3" style={{ maxWidth: "560px" }}>
              Más de 40 años construyendo infraestructura de alto impacto
            </h2>
            <p className="text-base text-white/45 mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
              5,377 departamentos desarrollados · 84 proyectos en distintos sectores
            </p>
          </FadeIn>

          {/* Sectores con iconos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-14">
            {sectores.map((s) => {
              const Icon = s.icon;
              return (
                <FadeIn key={s.tipo} delay={0.04}>
                  <div className="rounded-xl p-4 flex items-center gap-3"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(33,200,246,0.1)", border: "1px solid rgba(33,200,246,0.18)" }}>
                      <Icon size={15} style={{ color: CYAN }} />
                    </div>
                    <div>
                      <div className="text-lg font-extrabold leading-none" style={{ color: CYAN }}>{s.cantidad}</div>
                      <div className="text-[11px] text-white/45 leading-snug mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>{s.tipo}</div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Tabs */}
          <div className="mb-8 overflow-x-auto pb-2">
            <div className="flex gap-2 min-w-max">
              {categorias.map((cat, i) => (
                <button
                  key={cat.id}
                  onClick={() => setTabActivo(i)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200"
                  style={{
                    background: tabActivo === i ? BLUE : "rgba(255,255,255,0.07)",
                    color: tabActivo === i ? "#fff" : "rgba(255,255,255,0.5)",
                    border: tabActivo === i ? `1px solid ${BLUE}` : "1px solid rgba(255,255,255,0.1)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {cat.labelCorto}
                </button>
              ))}
            </div>
          </div>

          {/* Category label */}
          <div className="mb-6">
            <p className="text-sm text-white/40 flex items-center gap-2" style={{ fontFamily: "'Inter', sans-serif" }}>
              <span style={{ color: CYAN }}>{categorias[tabActivo].proyectos.length} proyectos</span>
              · {categorias[tabActivo].label}
            </p>
          </div>

          {/* Cards grid */}
          <motion.div
            key={tabActivo}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {categorias[tabActivo].proyectos.length === 0 ? (
              <div className="rounded-2xl p-12 flex flex-col items-center justify-center text-center gap-3"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px dashed rgba(255,255,255,0.12)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
                  style={{ background: "rgba(33,200,246,0.08)", border: "1px solid rgba(33,200,246,0.15)" }}>
                  <Images size={22} style={{ color: CYAN }} />
                </div>
                <p className="text-sm font-semibold text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Proyectos de esta categoría próximamente
                </p>
                <p className="text-xs text-white/30 max-w-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Estamos documentando los 13 desarrollos turísticos de nuestra trayectoria. La información se publicará en breve.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {categorias[tabActivo].proyectos.map((p, i) => (
                  <ProyectoCard key={`${p.nombre}-${i}`} p={p} />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ══ GALERÍA 1 — Proyectos destacados ════════════════ */}
      <section id="galeria" className="py-24" style={{ background: GRAY }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <SectionLabel>Galería</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight mb-10" style={{ color: NAVY }}>
              Proyectos destacados
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {galleryProyectos.map((item, i) => (
              <FadeIn key={i} delay={Math.floor(i / 5) * 0.06}>
                <GalleryCard item={item} onClick={() => setLightboxItem(item)} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACTO ════════════════════════════════════════ */}
      <section id="contacto" className="py-28" style={{ background: GRAY }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="rounded-3xl overflow-hidden relative" style={{ background: NAVY }}>
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(33,200,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(33,200,246,1) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: BLUE, transform: "translate(30%, -30%)" }} />

            <div className="relative px-8 sm:px-10 lg:px-16 py-16 lg:py-20">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Izquierda — texto */}
                <FadeIn direction="left">
                  <SectionLabel light>Hablemos de su proyecto</SectionLabel>
                  <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
                    ¿Tiene un proyecto en mente?
                  </h2>
                  <p className="text-base text-white/60 leading-relaxed mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Nuestro equipo de especialistas está listo para analizar su proyecto y proponer la solución técnica más adecuada. Llene el formulario y nos ponemos en contacto.
                  </p>
                  <a
                    href="https://tally.so/r/Xxogyd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base text-white transition-all duration-200 hover:opacity-90 hover:translate-y-[-2px]"
                    style={{ background: `linear-gradient(135deg, ${BLUE} 0%, #0A5E99 100%)`, boxShadow: "0 8px 28px rgba(14,122,196,0.4)" }}
                  >
                    Solicitar asesoría
                    <ExternalLink size={17} />
                  </a>
                </FadeIn>

                {/* Derecha — datos de contacto */}
                <FadeIn direction="right">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Tel. Administrativa */}
                    <div className="rounded-2xl p-5 flex flex-col gap-3"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(33,200,246,0.12)", border: "1px solid rgba(33,200,246,0.2)" }}>
                        <Phone size={16} style={{ color: CYAN }} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: CYAN, fontFamily: "'Inter', sans-serif" }}>Administrativa</p>
                        <a href="tel:5593858773" className="text-sm font-semibold text-white hover:opacity-80 transition-opacity" style={{ fontFamily: "'Inter', sans-serif" }}>
                          55 9385 8773
                        </a>
                      </div>
                    </div>

                    {/* Tel. Técnica */}
                    <div className="rounded-2xl p-5 flex flex-col gap-3"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(33,200,246,0.12)", border: "1px solid rgba(33,200,246,0.2)" }}>
                        <Phone size={16} style={{ color: CYAN }} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: CYAN, fontFamily: "'Inter', sans-serif" }}>Técnica</p>
                        <a href="tel:5571639013" className="text-sm font-semibold text-white hover:opacity-80 transition-opacity" style={{ fontFamily: "'Inter', sans-serif" }}>
                          55 7163 9013
                        </a>
                        <br />
                        <a href="tel:5550880803" className="text-sm font-semibold text-white hover:opacity-80 transition-opacity" style={{ fontFamily: "'Inter', sans-serif" }}>
                          55 5088 0803
                        </a>
                      </div>
                    </div>

                    {/* Correo */}
                    <div className="rounded-2xl p-5 flex flex-col gap-3"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(33,200,246,0.12)", border: "1px solid rgba(33,200,246,0.2)" }}>
                        <Mail size={16} style={{ color: CYAN }} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: CYAN, fontFamily: "'Inter', sans-serif" }}>Correo</p>
                        <a href="mailto:instalacionesaplicadasbaar@gmail.com"
                          className="text-sm font-semibold text-white hover:opacity-80 transition-opacity break-all"
                          style={{ fontFamily: "'Inter', sans-serif" }}>
                          instalacionesaplicadasbaar@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Domicilio + Web */}
                    <div className="rounded-2xl p-5 flex flex-col gap-3"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(33,200,246,0.12)", border: "1px solid rgba(33,200,246,0.2)" }}>
                        <MapPin size={16} style={{ color: CYAN }} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: CYAN, fontFamily: "'Inter', sans-serif" }}>Domicilio</p>
                        <p className="text-sm text-white/80 leading-snug" style={{ fontFamily: "'Inter', sans-serif" }}>
                          Puente 66 B, Fracc. Jardines del Sur<br />
                          Xochimilco, CDMX 16050
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Globe size={13} style={{ color: CYAN, flexShrink: 0 }} />
                        <a href="https://baarinstalacionesaplicadas.info" target="_blank" rel="noopener noreferrer"
                          className="text-xs text-white/50 hover:text-white transition-colors"
                          style={{ fontFamily: "'Inter', sans-serif" }}>
                          baarinstalacionesaplicadas.info
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══════════════════════════════════════════ */}
      <footer style={{ background: "#081524" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>

            {/* Marca */}
            <div className="md:col-span-1">
              <ImageWithFallback src={baarLogo} alt="BAAR Instalaciones Aplicadas"
                className="h-10 w-auto object-contain mb-4" style={{ filter: "brightness(0) invert(1)" }} />
              <p className="text-sm text-white/40 leading-relaxed mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                Ingeniería hidrosanitaria y eléctrica de alta especialización para proyectos de alto impacto en México.
              </p>
              <a href="https://baarinstalacionesaplicadas.info" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}>
                <Globe size={11} /> baarinstalacionesaplicadas.info
              </a>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>Empresa</h4>
              <ul className="space-y-2.5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-white/50 hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>Servicios</h4>
              <ul className="space-y-2.5">
                {["Ingeniería Hidrosanitaria", "Ingeniería Eléctrica", "Ingeniería y Desarrollo de Proyectos", "Acompañamiento Integral"].map((item) => (
                  <li key={item}><span className="text-sm text-white/50" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span></li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>Contacto</h4>
              <ul className="space-y-3">
                {[
                  { icon: Phone, label: "55 9385 8773", sub: "Administrativa", href: "tel:5593858773" },
                  { icon: Phone, label: "55 7163 9013 / 55 5088 0803", sub: "Técnica", href: "tel:5571639013" },
                  { icon: Mail,  label: "instalacionesaplicadasbaar@gmail.com", sub: null, href: "mailto:instalacionesaplicadasbaar@gmail.com" },
                  { icon: MapPin, label: "Puente 66 B, Fracc. Jardines del Sur, Xochimilco, CDMX 16050", sub: null, href: null },
                ].map(({ icon: Icon, label, sub, href }) => (
                  <li key={label} className="flex items-start gap-2.5">
                    <Icon size={13} className="flex-shrink-0 mt-0.5" style={{ color: CYAN }} />
                    <div>
                      {href ? (
                        <a href={href} className="text-xs text-white/50 hover:text-white transition-colors leading-snug block break-all" style={{ fontFamily: "'Inter', sans-serif" }}>{label}</a>
                      ) : (
                        <span className="text-xs text-white/50 leading-snug block" style={{ fontFamily: "'Inter', sans-serif" }}>{label}</span>
                      )}
                      {sub && <span className="text-[10px] text-white/25" style={{ fontFamily: "'Inter', sans-serif" }}>{sub}</span>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
            <p className="text-xs text-white/25" style={{ fontFamily: "'Inter', sans-serif" }}>
              © {new Date().getFullYear()} BAAR Instalaciones Aplicadas. Todos los derechos reservados.
            </p>
            <p className="text-xs text-white/25" style={{ fontFamily: "'Inter', sans-serif" }}>
              Xochimilco, Ciudad de México
            </p>
          </div>
        </div>
      </footer>

      {/* ══ LIGHTBOX ════════════════════════════════════════ */}
      {lightboxItem && (
        <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
      )}

      {/* ══ CHATBOT FLOTANTE ═════════════════════════════════ */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

        {/* Ventana de chat */}
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col rounded-2xl overflow-hidden shadow-2xl"
            style={{
              width: "min(380px, calc(100vw - 2rem))",
              height: "520px",
              background: "#ffffff",
              border: "1px solid rgba(13,27,42,0.1)",
              boxShadow: "0 24px 60px rgba(13,27,42,0.18)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 flex-shrink-0"
              style={{ background: NAVY }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(33,200,246,0.15)", border: "1px solid rgba(33,200,246,0.3)" }}>
                  <Bot size={16} style={{ color: CYAN }} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-tight">Asistente BAAR</div>
                  <div className="text-[10px] text-white/40 flex items-center gap-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    En línea
                  </div>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="p-1.5 rounded-lg transition-colors hover:bg-white/10"
                style={{ color: "rgba(255,255,255,0.5)" }}>
                <ChevronDown size={18} />
              </button>
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ background: "#F8FAFC" }}>
              {chatMsgs.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  {m.role === "bot" && (
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5"
                      style={{ background: NAVY }}>
                      <Bot size={12} style={{ color: CYAN }} />
                    </div>
                  )}
                  <div
                    className="max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line"
                    style={{
                      background: m.role === "user" ? BLUE : "#ffffff",
                      color: m.role === "user" ? "#ffffff" : NAVY,
                      border: m.role === "bot" ? "1px solid rgba(13,27,42,0.08)" : "none",
                      fontFamily: "'Inter', sans-serif",
                      boxShadow: "0 1px 4px rgba(13,27,42,0.07)",
                      borderRadius: m.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                    }}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Sugerencias rápidas */}
            <div className="px-3 pb-2 flex-shrink-0">
              <p className="text-[10px] text-gray-400 mb-1.5 px-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>Preguntas frecuentes</p>
              <div className="flex gap-1.5 overflow-x-auto pb-0.5" style={{ scrollbarWidth: "none" }}>
                {chatSugerencias.map((s) => (
                  <button
                    key={s}
                    onClick={() => enviarMensaje(s)}
                    className="whitespace-nowrap text-[11px] font-medium px-3 py-1.5 rounded-full flex-shrink-0 transition-all hover:opacity-80"
                    style={{ background: "rgba(14,122,196,0.09)", color: BLUE, border: "1px solid rgba(14,122,196,0.18)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="px-3 pb-3 pt-2 flex-shrink-0" style={{ borderTop: "1px solid rgba(13,27,42,0.07)", background: "#ffffff" }}>
              <form
                onSubmit={(e) => { e.preventDefault(); enviarMensaje(chatInput); }}
                className="flex items-center gap-2 rounded-xl px-3 py-2"
                style={{ background: "#F1F5F9", border: "1px solid rgba(13,27,42,0.08)" }}
              >
                <input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Escriba su pregunta…"
                  className="flex-1 bg-transparent text-sm outline-none"
                  style={{ color: NAVY, fontFamily: "'Inter', sans-serif" }}
                />
                <button
                  type="submit"
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all hover:opacity-80"
                  style={{ background: BLUE }}
                >
                  <Send size={13} color="#ffffff" />
                </button>
              </form>
            </div>
          </motion.div>
        )}

        {/* Botón flotante */}
        <button
          onClick={() => setChatOpen((o) => !o)}
          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-105 hover:opacity-90"
          style={{ background: BLUE, boxShadow: "0 8px 24px rgba(14,122,196,0.45)" }}
          aria-label="Abrir asistente"
        >
          {chatOpen
            ? <X size={22} color="#ffffff" />
            : <MessageCircle size={22} color="#ffffff" />}
        </button>
      </div>

    </div>
  );
}
