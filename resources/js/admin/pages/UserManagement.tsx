
import { useState, useEffect } from 'react';
import { Search, UserPlus, Edit, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

// Tipos de datos
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'user';
  status: 'active' | 'inactive' | 'pending';
  lastLogin: string;
}

// Estilos para badges
const roleBadgeClasses = {
  admin: 'bg-red-100 text-red-800',
  editor: 'bg-blue-100 text-blue-800',
  user: 'bg-gray-100 text-gray-800'
};

const statusBadgeClasses = {
  active: 'bg-green-100 text-green-800',
  inactive: 'bg-gray-100 text-gray-800',
  pending: 'bg-yellow-100 text-yellow-800'
};

// Datos simulados
const mockUsers: User[] = Array.from({ length: 50 }, (_, i) => ({
  id: `user-${i + 1}`,
  name: `Usuario ${i + 1}`,
  email: `usuario${i + 1}@example.com`,
  role: i % 3 === 0 ? 'admin' : i % 3 === 1 ? 'editor' : 'user',
  status: i % 4 === 0 ? 'pending' : i % 4 === 1 ? 'inactive' : 'active',
  lastLogin: new Date(Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)).toISOString(),
}));

export function UserManagement() {
  // Estado para la gestión de usuarios
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const [isMenuOpen, setIsMenuOpen] = useState<string | null>(null);

  // Simulación de carga de datos
  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(mockUsers);
      setFilteredUsers(mockUsers);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Filtrar usuarios
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredUsers(users);
      setCurrentPage(1);
    } else {
      const filtered = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
      setCurrentPage(1);
    }
  }, [searchTerm, users]);


  // Paginación
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  

  // Funciones de simulación
  const handleEditUser = (userId: string) => {
    alert(`Editar usuario con ID: ${userId}`);
  };

  const handleDeleteUser = (userId: string) => {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      setUsers(users.filter(user => user.id !== userId));
      alert(`Usuario con ID: ${userId} eliminado (simulado)`);
    }
  };

  const handleAddUser = () => {
    alert('Añadir nuevo usuario (simulado)');
  };

  const handleStatusChange = (userId: string, newStatus: User['status']) => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, status: newStatus } : user
    ));
    setIsMenuOpen(null);
  };

  const toggleMenu = (userId: string) => {
    setIsMenuOpen(isMenuOpen === userId ? null : userId);
  };

  return (
    <div className="space-y-6 p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Gestión de Usuarios</h1>
        <button 
          onClick={handleAddUser}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          <UserPlus className="h-4 w-4" />
          Añadir Usuario
        </button>
      </div>

      {/* Barra de búsqueda */}
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar usuarios por nombre o email..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Tabla de usuarios */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Último acceso</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${roleBadgeClasses[user.role]}`}>
                      {user.role === 'admin' ? 'Administrador' : user.role === 'editor' ? 'Editor' : 'Usuario'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="relative">
                      <button 
                        onClick={() => toggleMenu(user.id)}
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${statusBadgeClasses[user.status]} flex items-center gap-1`}
                      >
                        {user.status === 'active' ? 'Activo' : user.status === 'pending' ? 'Pendiente' : 'Inactivo'}
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {isMenuOpen === user.id && (
                        <div className="absolute z-10 mt-1 w-40 bg-white shadow-lg rounded-md border border-gray-200">
                          <button
                            onClick={() => handleStatusChange(user.id, 'active')}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Activar
                          </button>
                          <button
                            onClick={() => handleStatusChange(user.id, 'inactive')}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Desactivar
                          </button>
                          <button
                            onClick={() => handleStatusChange(user.id, 'pending')}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Marcar como pendiente
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {new Date(user.lastLogin).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleEditUser(user.id)}
                        className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
                        title="Editar"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
                        title="Eliminar"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                  {searchTerm ? 'No se encontraron usuarios' : 'Cargando usuarios...'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      {filteredUsers.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">
            Mostrando {indexOfFirstUser + 1}-{Math.min(indexOfLastUser, filteredUsers.length)} de{' '}
            {filteredUsers.length} usuarios
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`p-2 rounded-md border ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 rounded-md text-sm ${currentPage === pageNum ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              
              {totalPages > 5 && currentPage < totalPages - 2 && (
                <span className="px-2 text-gray-500">...</span>
              )}
              
              {totalPages > 5 && currentPage < totalPages - 2 && (
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className={`w-8 h-8 rounded-md text-sm ${currentPage === totalPages ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  {totalPages}
                </button>
              )}
            </div>
            
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-md border ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}