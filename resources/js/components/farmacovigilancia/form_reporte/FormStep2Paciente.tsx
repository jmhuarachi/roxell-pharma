import React from 'react'

import { FormData } from "@/types/reporteFarmacovigilancia";

interface FormStep2Props {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  departamentosBolivia: string[];
}

export const FormStep2Paciente = ({ formData, handleChange, departamentosBolivia }: FormStep2Props) => (
  <div className="space-y-6">
    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
      <span className="text-blue-600">2.</span> Datos del Paciente
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
        <input
          type="text"
          name="nombrePaciente"
          value={formData.nombrePaciente}
          onChange={handleChange}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Apellido *</label>
        <input
          type="text"
          name="apellidoPaciente"
          value={formData.apellidoPaciente}
          onChange={handleChange}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Dirección *</label>
      <input
        type="text"
        name="direccion"
        value={formData.direccion}
        onChange={handleChange}
        className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        required
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Departamento *</label>
        <select
          name="departamento"
          value={formData.departamento}
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
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad *</label>
        <input
          type="text"
          name="ciudad"
          value={formData.ciudad}
          onChange={handleChange}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Género *</label>
        <select
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="">Seleccionar</option>
          <option value="Femenino">Femenino</option>
          <option value="Masculino">Masculino</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Edad *</label>
        <input
          type="number"
          name="edad"
          value={formData.edad}
          onChange={handleChange}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
        <input
          type="tel"
          name="telefonoPaciente"
          value={formData.telefonoPaciente}
          onChange={handleChange}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Seguro Médico</label>
      <input
        type="text"
        name="seguroMedico"
        value={formData.seguroMedico}
        onChange={handleChange}
        className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  </div>
);