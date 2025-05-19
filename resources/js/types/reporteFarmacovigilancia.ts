export interface FormData {
  // Datos del notificador
  nombre: string;
  apellido: string;
  email: string;
  carnetIdentidad: string;
  profesion: string;
  telefonoNotificador: string;
  fuenteReporte: string;

  // Datos del paciente
  nombrePaciente: string;
  apellidoPaciente: string;
  direccion: string;
  departamento: string;
  ciudad: string;
  genero: string;
  edad: string;
  telefonoPaciente: string;
  seguroMedico: string;

  // Datos del medicamento
  nombreMedicamento: string;
  presentacion: string;
  lote: string;
  fechaVencimiento: string;
  fabricante: string;
  viaAdministracion: string;

  // Datos del tratamiento
  fechaInicioTratamiento: string;
  fechaFinalizacion: string;
  dosis: string;
  frecuencia: string;
  indicacion: string;
  tratamientoSuspendido: boolean;

  // Reacción adversa
  fechaReaccion: string;
  descripcionReaccion: string;
  gravedad: string;
  resultado: string;

  // Datos adicionales
  embarazo: boolean;
  lactancia: boolean;
  otrosMedicamentos: string;
  antecedentes: string;

  // Datos de compra
  nombreFarmacia: string;
  direccionFarmacia: string;
  departamentoFarmacia: string;
  fechaCompra: string;
}

export interface GravedadOption {
  value: string;
  label: string;
}