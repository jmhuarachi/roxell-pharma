import { FormData } from "@/client/types/reporteFarmacovigilancia";

interface FormStep5Props {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  departamentosBolivia: string[];
}

export const FormStep5Confirmacion = ({ formData, handleChange, departamentosBolivia }: FormStep5Props) => (
  <div className="space-y-6">
    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
      <span className="text-blue-600">5.</span> Compra del Medicamento
    </h3>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de la farmacia, clínica, hospital *</label>
      <input
        type="text"
        name="nombreFarmacia"
        value={formData.nombreFarmacia}
        onChange={handleChange}
        className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        required
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Dirección *</label>
        <input
          type="text"
          name="direccionFarmacia"
          value={formData.direccionFarmacia}
          onChange={handleChange}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Departamento *</label>
        <select
          name="departamentoFarmacia"
          value={formData.departamentoFarmacia}
          onChange={handleChange}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="">Seleccionar</option>
          {departamentosBolivia.map(depto => (
            <option key={depto} value={depto}>{depto}</option>
          ))}
        </select>
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Compra *</label>
      <input
        type="date"
        name="fechaCompra"
        value={formData.fechaCompra}
        onChange={handleChange}
        className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        required
      />
    </div>
    
    <div className="bg-blue-50 p-4 rounded-lg">
      <h4 className="font-medium text-blue-800 mb-2">Confirmación</h4>
      <p className="text-sm text-blue-700">
        Al enviar este formulario, confirmo que la información proporcionada es verídica y autorizo su uso para fines de farmacovigilancia en Bolivia.
      </p>
    </div>
    
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <h4 className="font-medium text-gray-800 mb-3">Resumen del Reporte</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-600">Notificador:</p>
          <p className="font-medium text-gray-700">{formData.nombre} {formData.apellido}</p>
        </div>
        <div>
          <p className="text-gray-600">Paciente:</p>
          <p className="font-medium text-gray-700">{formData.nombrePaciente} {formData.apellidoPaciente}</p>
        </div>
        <div>
          <p className="text-gray-600">Medicamento:</p>
          <p className="font-medium text-gray-700">{formData.nombreMedicamento}</p>
        </div>
        <div>
          <p className="text-gray-600">Reacción adversa:</p>
          <p className="font-medium text-gray-700">{formData.descripcionReaccion.substring(0, 30)}...</p>
        </div>
      </div>
    </div>
    
    <div className="flex items-start">
      <input
        type="checkbox"
        id="confirmacion"
        required
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
      />
      <label htmlFor="confirmacion" className="ml-2 block text-sm text-gray-700">
        Acepto los términos y confirmo que la información proporcionada es correcta.
      </label>
    </div>
  </div>
);