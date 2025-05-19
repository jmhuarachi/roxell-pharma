import { FormData } from "@/client/types/reporteFarmacovigilancia";

interface GravedadOption {
  value: string;
  label: string;
}

interface FormStep4Props {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  gravedadOptions: GravedadOption[];
}

export const FormStep4Tratamiento = ({ formData, handleChange, gravedadOptions }: FormStep4Props) => (
  <div className="space-y-6">
    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
      <span className="text-blue-600">4.</span> Tratamiento y Reacción Adversa
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Inicio *</label>
        <input
          type="date"
          name="fechaInicioTratamiento"
          value={formData.fechaInicioTratamiento}
          onChange={handleChange}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Finalización</label>
        <input
          type="date"
          name="fechaFinalizacion"
          value={formData.fechaFinalizacion}
          onChange={handleChange}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Dosis *</label>
        <input
          type="text"
          name="dosis"
          value={formData.dosis}
          onChange={handleChange}
          placeholder="Ej: 500mg cada 8 horas"
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Frecuencia *</label>
        <input
          type="text"
          name="frecuencia"
          value={formData.frecuencia}
          onChange={handleChange}
          placeholder="Ej: 3 veces al día"
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Indicación (Diagnóstico) *</label>
      <input
        type="text"
        name="indicacion"
        value={formData.indicacion}
        onChange={handleChange}
        className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        required
      />
    </div>

    <div className="flex items-center">
      <input
        type="checkbox"
        name="tratamientoSuspendido"
        checked={formData.tratamientoSuspendido}
        onChange={handleChange}
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
      />
      <label className="ml-2 block text-sm text-gray-700">
        Tratamiento suspendido debido a la reacción adversa
      </label>
    </div>

    <div className="pt-4 border-t border-gray-200">
      <h4 className="text-md font-medium text-gray-800 mb-3">Descripción de la Reacción Adversa</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de la Reacción *</label>
          <input
            type="date"
            name="fechaReaccion"
            value={formData.fechaReaccion}
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Gravedad *</label>
          <select
            name="gravedad"
            value={formData.gravedad}
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            required
          >
            {gravedadOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Descripción *</label>
        <textarea
          name="descripcionReaccion"
          value={formData.descripcionReaccion}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="Describa los síntomas, tiempo de aparición, evolución, etc."
          required
        ></textarea>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Resultado</label>
        <input
          type="text"
          name="resultado"
          value={formData.resultado}
          onChange={handleChange}
          placeholder="Ej: Recuperado, Secuelas, Fallecido"
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
      <div className="flex items-center">
        <input
          type="checkbox"
          name="embarazo"
          checked={formData.embarazo}
          onChange={handleChange}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label className="ml-2 block text-sm text-gray-700">
          Paciente en estado de gestación
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          name="lactancia"
          checked={formData.lactancia}
          onChange={handleChange}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label className="ml-2 block text-sm text-gray-700">
          Paciente en período de lactancia
        </label>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Otros medicamentos que toma el paciente</label>
        <textarea
          name="otrosMedicamentos"
          value={formData.otrosMedicamentos}
          onChange={handleChange}
          rows={2}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="Incluya dosis y frecuencia"
        ></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Antecedentes médicos relevantes</label>
        <textarea
          name="antecedentes"
          value={formData.antecedentes}
          onChange={handleChange}
          rows={2}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="Alergias, enfermedades crónicas, etc."
        ></textarea>
      </div>
    </div>
  </div>
);