import { FormData } from "@/client/types/reporteFarmacovigilancia";

interface FormStep3Props {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

export const FormStep3Medicamento = ({ formData, handleChange }: FormStep3Props) => (
  <div className="space-y-6">
    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
      <span className="text-blue-600">3.</span> Datos del Medicamento
    </h3>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del Medicamento *</label>
      <input
        type="text"
        name="nombreMedicamento"
        value={formData.nombreMedicamento}
        onChange={handleChange}
        className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        required
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Presentación *</label>
        <input
          type="text"
          name="presentacion"
          value={formData.presentacion}
          onChange={handleChange}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Lote *</label>
        <input
          type="text"
          name="lote"
          value={formData.lote}
          onChange={handleChange}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Vencimiento *</label>
        <input
          type="date"
          name="fechaVencimiento"
          value={formData.fechaVencimiento}
          onChange={handleChange}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Fabricante</label>
        <input
          type="text"
          name="fabricante"
          value={formData.fabricante}
          onChange={handleChange}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Vía de Administración *</label>
      <input
        type="text"
        name="viaAdministracion"
        value={formData.viaAdministracion}
        onChange={handleChange}
        placeholder="Ej: Oral, Intravenosa, etc."
        className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        required
      />
    </div>
  </div>
);