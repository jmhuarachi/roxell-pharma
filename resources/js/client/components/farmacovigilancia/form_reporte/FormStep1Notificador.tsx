import { FormData } from "@/client/types/reporteFarmacovigilancia";

interface FormStep1Props {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  profesiones: string[];
}

export const FormStep1Notificador = ({ formData, handleChange, profesiones }: FormStep1Props) => (
  <div className="space-y-6">
    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
      <span className="text-blue-600">1.</span> Datos del Notificador
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Apellido *</label>
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Carnet de Identidad *</label>
        <input
          type="text"
          name="carnetIdentidad"
          value={formData.carnetIdentidad}
          onChange={handleChange}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Profesión *</label>
        <select
          name="profesion"
          value={formData.profesion}
          onChange={handleChange}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="">Seleccionar</option>
          {profesiones.map(prof => (
            <option key={prof} value={prof}>{prof}</option>
          ))}
        </select>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
        <input
          type="tel"
          name="telefonoNotificador"
          value={formData.telefonoNotificador}
          onChange={handleChange}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Fuente de Reporte *</label>
      <select
        name="fuenteReporte"
        value={formData.fuenteReporte}
        onChange={handleChange}
        className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        required
      >
        <option value="">Seleccionar</option>
        <option value="Médico">Médico</option>
        <option value="Paciente">Paciente</option>
        <option value="Familiar">Familiar</option>
        <option value="Farmacéutico">Farmacéutico</option>
        <option value="Enfermero">Enfermero</option>
        <option value="Otro">Otro</option>
      </select>
    </div>
  </div>
);