import { motion } from "framer-motion";
import { useState } from "react";
import { Contacto } from "./Contacto";
import { Enlaces } from "./Enlaces";
import { Newsletter } from "./Newsletter";
import { Modal } from "./Modal";

const variantesContenedor = {
  oculto: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const Footer = () => {
  const [modalType, setModalType] = useState<"terms" | "privacy" | null>(null);

  const openModal = (type: "terms" | "privacy") => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial="oculto"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantesContenedor}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          <Contacto />
          <Enlaces />
          <Newsletter />
        </motion.div>

        {/* Divisor */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="h-px bg-gray-700 my-6"
        />

        {/* Términos y copyright */}
        <motion.div
          initial="oculto"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantesContenedor}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <motion.div
            variants={variantesContenedor}
            className="flex space-x-4 mb-4 md:mb-0"
          >
            <motion.button
              onClick={() => openModal("terms")}
              className="text-gray-400 hover:text-amber-400 transition-colors"
              whileHover={{ x: 3 }}
            >
              Términos y condiciones
            </motion.button>
            <motion.button
              onClick={() => openModal("privacy")}
              className="text-gray-400 hover:text-amber-400 transition-colors"
              whileHover={{ x: 3 }}
            >
              Política de privacidad
            </motion.button>
          </motion.div>

          <motion.p
            variants={variantesContenedor}
            className="text-gray-500 text-sm"
          >
            © {new Date().getFullYear()} ROXELL Pharma S.R.L. Todos los derechos reservados.
          </motion.p>
        </motion.div>
      </div>

      {/* Modal de Términos y Condiciones */}
      <Modal
        isOpen={modalType === "terms"}
        onClose={closeModal}
        title="Términos y Condiciones de Uso"
      >
        <div className="space-y-6">
          <section>
            <h4 className="text-xl font-bold text-gray-900 mb-3">1. Aceptación de los Términos</h4>
            <p className="mb-2">
              Los presentes Términos y Condiciones ("Términos") regulan el uso del sitio web de ROXELL Pharma S.R.L. ("la Empresa", "nosotros" o "nuestro"), con domicilio legal en [Dirección Completa], inscrita en el Registro de Comercio de Bolivia bajo el número [Número de Matrícula], NIT [Número de NIT].
            </p>
            <p>
              Al acceder y utilizar este sitio web ("el Sitio"), usted ("Usuario") acepta estar legalmente obligado por estos Términos. Si no está de acuerdo con alguna parte de estos Términos, debe abstenerse de utilizar el Sitio.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-bold text-gray-900 mb-3">2. Uso Adecuado del Sitio</h4>
            <p className="mb-2">
              2.1. Este Sitio tiene como finalidad proporcionar información general sobre nuestros productos farmacéuticos, servicios y actividades corporativas. La información contenida no constituye asesoramiento médico profesional ni sustituye la consulta con un profesional de la salud calificado.
            </p>
            <p className="mb-2">
              2.2. El Usuario se compromete a utilizar el Sitio de conformidad con la ley, la moral, las buenas costumbres y el orden público. Queda expresamente prohibido:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>Utilizar el Sitio para fines ilícitos o contrarios a la normativa farmacéutica boliviana</li>
              <li>Realizar afirmaciones falsas sobre productos médicos</li>
              <li>Modificar, copiar o distribuir contenido sin autorización expresa</li>
              <li>Utilizar mecanismos de scraping o extracción automatizada de datos</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-bold text-gray-900 mb-3">3. Propiedad Intelectual e Industrial</h4>
            <p className="mb-2">
              3.1. Todos los derechos de propiedad intelectual sobre el contenido del Sitio (incluyendo textos, gráficos, logotipos, imágenes, diseños, software y bases de datos) son propiedad exclusiva de ROXELL Pharma S.R.L. o de sus licenciantes, y están protegidos por las leyes bolivianas e internacionales de propiedad intelectual.
            </p>
            <p>
              3.2. Los nombres comerciales, marcas y signos distintivos que aparecen en el Sitio están registrados a nombre de la Empresa. Queda prohibido su uso sin autorización previa y por escrito.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-bold text-gray-900 mb-3">4. Información sobre Productos</h4>
            <p className="mb-2">
              4.1. La información sobre productos farmacéuticos que aparece en el Sitio está destinada exclusivamente a profesionales de la salud en Bolivia. Los productos deben ser utilizados según las indicaciones de un médico o profesional de la salud calificado.
            </p>
            <p className="mb-2">
              4.2. ROXELL Pharma S.R.L. se reserva el derecho de modificar en cualquier momento las especificaciones de los productos sin previo aviso, de acuerdo con las normativas de la Autoridad Nacional de Medicamentos y Tecnología en Salud (ANMAT) y el Ministerio de Salud de Bolivia.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-bold text-gray-900 mb-3">5. Limitación de Responsabilidad</h4>
            <p className="mb-2">
              5.1. ROXELL Pharma S.R.L. no garantiza la disponibilidad y continuidad del Sitio, ni será responsable por cualquier daño directo o indirecto que derive de:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>Interrupciones del servicio, fallos técnicos o desconexiones</li>
              <li>Transmisión de virus o programas maliciosos</li>
              <li>Uso indebido o ilícito del Sitio por terceros</li>
            </ul>
            <p>
              5.2. La Empresa no asume responsabilidad por el contenido de enlaces externos que puedan aparecer en el Sitio.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-bold text-gray-900 mb-3">6. Legislación Aplicable y Jurisdicción</h4>
            <p>
              Estos Términos se regirán e interpretarán de acuerdo con las leyes de Bolivia. Para cualquier controversia que pudiera surgir, las partes se someten expresamente a los tribunales competentes de la ciudad de [Ciudad], con renuncia a cualquier otro fuero o jurisdicción que pudiera corresponderles.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-bold text-gray-900 mb-3">7. Modificaciones</h4>
            <p>
              ROXELL Pharma S.R.L. se reserva el derecho de modificar estos Términos en cualquier momento. Las modificaciones entrarán en vigor a partir de su publicación en el Sitio. Se recomienda al Usuario revisar periódicamente estos Términos.
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8">
            Última actualización: {new Date().toLocaleDateString('es-BO', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </Modal>

      {/* Modal de Política de Privacidad */}
      <Modal
        isOpen={modalType === "privacy"}
        onClose={closeModal}
        title="Política de Privacidad y Protección de Datos"
      >
        <div className="space-y-6">
          <section>
            <h4 className="text-xl font-bold text-gray-900 mb-3">1. Responsable del Tratamiento</h4>
            <p className="mb-2">
              ROXELL Pharma S.R.L., con domicilio en [Dirección Completa], NIT [Número de NIT], es responsable del tratamiento de los datos personales que nos proporcione a través de este Sitio o por cualquier otro medio.
            </p>
            <p>
              Para cualquier consulta relacionada con la protección de datos, puede contactarnos a través de: [correo electrónico de protección de datos] o al teléfono [número de contacto].
            </p>
          </section>

          <section>
            <h4 className="text-xl font-bold text-gray-900 mb-3">2. Finalidades del Tratamiento</h4>
            <p className="mb-2">
              Sus datos personales serán tratados para las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>Gestionar sus consultas y solicitudes de información</li>
              <li>Proveer servicios y productos solicitados</li>
              <li>Cumplir con obligaciones legales y regulatorias en el sector farmacéutico</li>
              <li>Enviar comunicaciones comerciales (solo con consentimiento expreso)</li>
              <li>Mejorar nuestros productos y servicios</li>
              <li>Gestionar eventos científicos o médicos</li>
            </ul>
            <p>
              La base legal para el tratamiento es su consentimiento, la ejecución de un contrato o el cumplimiento de obligaciones legales.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-bold text-gray-900 mb-3">3. Tipos de Datos Recopilados</h4>
            <p className="mb-2">
              Podemos recopilar y tratar las siguientes categorías de datos:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li><strong>Datos identificativos:</strong> Nombre completo, número de colegiación (para profesionales de la salud), dirección de correo electrónico, número de teléfono</li>
              <li><strong>Datos profesionales:</strong> Especialidad, institución donde trabaja (para profesionales de la salud)</li>
              <li><strong>Datos de navegación:</strong> Dirección IP, tipo de dispositivo, páginas visitadas (a través de cookies)</li>
              <li><strong>Datos de salud:</strong> Solo cuando sean estrictamente necesarios para cumplir con reportes de farmacovigilancia</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-bold text-gray-900 mb-3">4. Transferencias Internacionales</h4>
            <p className="mb-2">
              4.1. Sus datos podrán ser transferidos a terceros países únicamente cuando sea necesario para:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>Cumplir con reportes de farmacovigilancia a autoridades sanitarias internacionales</li>
              <li>Procesar información con proveedores tecnológicos que ofrecen garantías adecuadas</li>
            </ul>
            <p>
              4.2. Todas las transferencias internacionales se realizarán conforme a lo establecido en la Ley N° 548 de Protección de Datos Personales de Bolivia.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-bold text-gray-900 mb-3">5. Conservación de Datos</h4>
            <p className="mb-2">
              Sus datos personales serán conservados durante el tiempo necesario para cumplir con las finalidades descritas, y posteriormente por los plazos legales establecidos en la normativa farmacéutica boliviana (especialmente para efectos de farmacovigilancia y responsabilidad de productos).
            </p>
            <p>
              Los datos de navegación recopilados a través de cookies se conservarán según lo indicado en nuestra Política de Cookies.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-bold text-gray-900 mb-3">6. Derechos ARCO</h4>
            <p className="mb-2">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li><strong>Acceso:</strong> Solicitar información sobre qué datos tenemos sobre usted</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
              <li><strong>Cancelación:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos en ciertas circunstancias</li>
              <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento en ciertos casos</li>
              <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
              <li><strong>Revocación:</strong> Retirar su consentimiento en cualquier momento</li>
            </ul>
            <p>
              Para ejercer estos derechos, puede enviar una solicitud escrita a nuestra dirección o correo electrónico de protección de datos, acompañada de copia de su documento de identidad.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-bold text-gray-900 mb-3">7. Seguridad de los Datos</h4>
            <p className="mb-2">
              Implementamos medidas técnicas y organizativas apropiadas para garantizar un nivel de seguridad adecuado al riesgo, incluyendo:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>Encriptación de comunicaciones</li>
              <li>Control de acceso restringido</li>
              <li>Procedimientos regulares de copia de seguridad</li>
              <li>Evaluaciones periódicas de seguridad</li>
            </ul>
            <p>
              Todo el personal que accede a datos personales está sujeto a deberes de confidencialidad.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-bold text-gray-900 mb-3">8. Política de Cookies</h4>
            <p className="mb-2">
              Este Sitio utiliza cookies propias y de terceros para:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>Garantizar el correcto funcionamiento del Sitio</li>
              <li>Analizar el tráfico y uso del Sitio (Google Analytics)</li>
              <li>Mostrar publicidad relevante (si aplica)</li>
            </ul>
            <p>
              Puede configurar sus preferencias de cookies en cualquier momento a través de nuestro banner de cookies o la configuración de su navegador.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-bold text-gray-900 mb-3">9. Menores de Edad</h4>
            <p>
              Este Sitio no está dirigido a menores de edad. No recopilamos conscientemente información personal de menores. Si tiene conocimiento de que un menor nos ha proporcionado datos sin consentimiento parental, por favor contáctenos para eliminar dicha información.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-bold text-gray-900 mb-3">10. Modificaciones</h4>
            <p>
              Nos reservamos el derecho a modificar esta Política para adaptarla a cambios legislativos o en nuestros procedimientos. Las modificaciones entrarán en vigor tras su publicación en el Sitio.
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8">
            Última actualización: {new Date().toLocaleDateString('es-BO', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </Modal>
    </footer>
  );
};