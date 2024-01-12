function cargarDepartamentos() {
    var paisSeleccionado = document.getElementById("paises").value;
    var departamentosSelect = document.getElementById("departamentos");

    // Limpia las opciones existentes
    while (departamentosSelect.options.length > 1) {
        departamentosSelect.remove(1);
    }

    // Lógica para cargar departamentos según el país seleccionado
    if (paisSeleccionado === "Colombia") {
        // departamentos de Colombia
        agregarOpcion("Antioquia", "departamentos");
        agregarOpcion("Amazonas", "departamentos");
        agregarOpcion("Arauca", "departamentos");
        agregarOpcion("Atlantico", "departamentos");
        agregarOpcion("Bogotá", "departamentos");
        agregarOpcion("Bolívar", "departamentos");
        agregarOpcion("Boyacá", "departamentos");
        agregarOpcion("Caldas", "departamentos");
        agregarOpcion("Caquetá", "departamentos");
        agregarOpcion("Casanare", "departamentos");
        agregarOpcion("Cauca", "departamentos");
        agregarOpcion("Chocó", "departamentos");
        agregarOpcion("Cordoba", "departamentos");
        agregarOpcion("Cundinamarca", "departamentos");
        agregarOpcion("Guainía", "departamentos");
        agregarOpcion("Guaviare", "departamentos");
        agregarOpcion("Huila", "departamentos");
        agregarOpcion("La Guajira", "departamentos");
        agregarOpcion("Magdalena", "departamentos");
        agregarOpcion("Meta", "departamentos");
        agregarOpcion("Nariño", "departamentos");
        agregarOpcion("Norte de Santander", "departamentos");
        agregarOpcion("Putumayo", "departamentos");
        agregarOpcion("Quindío", "departamentos");
        agregarOpcion("Risaralda", "departamentos");
        agregarOpcion("San Andrés y Providencia", "departamentos");
        agregarOpcion("Santander", "departamentos");
        agregarOpcion("Sucre", "departamentos");
        agregarOpcion("Tolima", "departamentos");
        agregarOpcion("Valle del Cauca", "departamentos");
        agregarOpcion("Vaupés", "departamentos");
        agregarOpcion("Vichada", "departamentos");
    }
    
    cargarCiudades();
}

function cargarCiudades() {
    var paisSeleccionado = document.getElementById("paises").value;
    var departamentoSeleccionado = document.getElementById("departamentos").value;
    var ciudadesSelect = document.getElementById("ciudades");

    // Limpia las opciones existentes
    while (ciudadesSelect.options.length > 1) {
        ciudadesSelect.remove(1);
    }

    // Opciones de paises, departamentos y ciudades/municipios
    /* COLOMBIA */
    if (paisSeleccionado === "Colombia" && departamentoSeleccionado === "Antioquia") {
        agregarOpcionCiudad("Medellín");
        agregarOpcionCiudad("Abejorral");
        agregarOpcionCiudad("Abriaquí");
        agregarOpcionCiudad("Alejandría");
        agregarOpcionCiudad("Amagá");
        agregarOpcionCiudad("Amalfi");
        agregarOpcionCiudad("Andes");
        agregarOpcionCiudad("Angelópolis");
        agregarOpcionCiudad("Angostura");
        agregarOpcionCiudad("Anorí");
        agregarOpcionCiudad("Anzá");
        agregarOpcionCiudad("Apartadó");
        agregarOpcionCiudad("Arboletes");
        agregarOpcionCiudad("Argelia");
        agregarOpcionCiudad("Armenia");
        agregarOpcionCiudad("Barbosa");
        agregarOpcionCiudad("Bello");
        agregarOpcionCiudad("Belmira");
        agregarOpcionCiudad("Betania");
        agregarOpcionCiudad("Betulia");
        agregarOpcionCiudad("Briceño");
        agregarOpcionCiudad("Buricá");
        agregarOpcionCiudad("Cáceres");
        agregarOpcionCiudad("Caicedo");
        agregarOpcionCiudad("Caldas");
        agregarOpcionCiudad("Campamento");  
        agregarOpcionCiudad("Cañasgordas");
        agregarOpcionCiudad("Caracolí");
        agregarOpcionCiudad("Caramanta");
        agregarOpcionCiudad("Carepa"); 
        agregarOpcionCiudad("Carolina del Principe");
        agregarOpcionCiudad("Caucasia");
        agregarOpcionCiudad("Chigorodó");
        agregarOpcionCiudad("Cisneros");
        agregarOpcionCiudad("Ciudad Bolívar");
        agregarOpcionCiudad("Copacabana");
        agregarOpcionCiudad("Dabeida");
        agregarOpcionCiudad("Don Matías");
        agregarOpcionCiudad("Ebéjico");
        agregarOpcionCiudad("El Bagre");
        agregarOpcionCiudad("Enterrios");
        agregarOpcionCiudad("Envigado");
        agregarOpcionCiudad("Fredonia");
        agregarOpcionCiudad("Frontino");
        agregarOpcionCiudad("Giraldo");
        agregarOpcionCiudad("Girardota");
        agregarOpcionCiudad("Gómez Plata");
        agregarOpcionCiudad("Granada");
        agregarOpcionCiudad("Guadalupe");
        agregarOpcionCiudad("Guarne");
        agregarOpcionCiudad("Guatapé");
        agregarOpcionCiudad("Heliconia");
        agregarOpcionCiudad("Hispania");
        agregarOpcionCiudad("Itagüí");
        agregarOpcionCiudad("Ituango");
        agregarOpcionCiudad("Jardín");
        agregarOpcionCiudad("Jericó");
        agregarOpcionCiudad("La Ceja");
        agregarOpcionCiudad("La Estrella");
        agregarOpcionCiudad("La Pintada");
        agregarOpcionCiudad("La Unión"); 
        agregarOpcionCiudad("Liborina"); 
        agregarOpcionCiudad("Maceo");
        agregarOpcionCiudad("Marinilla");
        agregarOpcionCiudad("Medellín");
        agregarOpcionCiudad("Montebello");
        agregarOpcionCiudad("Murindó");
        agregarOpcionCiudad("Mutatá");
        agregarOpcionCiudad("Nariño");
        agregarOpcionCiudad("Necoclí");
        agregarOpcionCiudad("Nechí");
        agregarOpcionCiudad("Olaya");
        agregarOpcionCiudad("Peñol");
        agregarOpcionCiudad("Peque");
        agregarOpcionCiudad("Pueblorrico");
        agregarOpcionCiudad("Puerto Berrío");
        agregarOpcionCiudad("Puerto Nare");
        agregarOpcionCiudad("Puerto Triunfo");
        agregarOpcionCiudad("Remedios");
        agregarOpcionCiudad("Retiro");
        agregarOpcionCiudad("Rionegro");
        agregarOpcionCiudad("Sabanalarga");
        agregarOpcionCiudad("Sabaneta");
        agregarOpcionCiudad("Salgar");
        agregarOpcionCiudad("San Andrés de Cuerquía");
        agregarOpcionCiudad("San Carlos");
        agregarOpcionCiudad("San Francisco");
        agregarOpcionCiudad("San Jerónimo");
        agregarOpcionCiudad("San José de la Montaña");
        agregarOpcionCiudad("San Juan de Urabá");
        agregarOpcionCiudad("San Luis");
        agregarOpcionCiudad("San Pedro de los Milagros");
        agregarOpcionCiudad("San Pedro de Urabá");
        agregarOpcionCiudad("San Rafael");
        agregarOpcionCiudad("San Roque");
        agregarOpcionCiudad("San Vicente");
        agregarOpcionCiudad("Santa Bárbara");
        agregarOpcionCiudad("Santa Fe de Antioquia");
        agregarOpcionCiudad("Santa Rosa de Osos");
        agregarOpcionCiudad("Santo Domingo");
        agregarOpcionCiudad("Segovia");
        agregarOpcionCiudad("Sonsón");
        agregarOpcionCiudad("Sopetrán");
        agregarOpcionCiudad("Támesis");
        agregarOpcionCiudad("Tarazá");
        agregarOpcionCiudad("Tarso");
        agregarOpcionCiudad("Titiribí");
        agregarOpcionCiudad("Toledo");
        agregarOpcionCiudad("Turbo");
        agregarOpcionCiudad("Uramita");
        agregarOpcionCiudad("Urrao");
        agregarOpcionCiudad("Valdivia");
        agregarOpcionCiudad("Valparaíso");
        agregarOpcionCiudad("Vegachí");
        agregarOpcionCiudad("Venecia");
        agregarOpcionCiudad("Vigía del Fuerte");
        agregarOpcionCiudad("Yalí");
        agregarOpcionCiudad("Yarumal");
        agregarOpcionCiudad("Yolombó");
        agregarOpcionCiudad("Yondó");
        agregarOpcionCiudad("Zaragoza");
    } else if (paisSeleccionado === "Colombia" && departamentoSeleccionado === "Amazonas") {
        agregarOpcionCiudad("Leticia");
        agregarOpcionCiudad("Puerto Nariño");
        agregarOpcionCiudad("La Chorrera");
        agregarOpcionCiudad("Puerto Santander");
        agregarOpcionCiudad("El Encanto");
        agregarOpcionCiudad("La Pedrera");
        agregarOpcionCiudad("Mirití-Paraná");
        agregarOpcionCiudad("Puerto Alegría");
        agregarOpcionCiudad("Puerto Arica");
        agregarOpcionCiudad("Puerto Santander");
        agregarOpcionCiudad("Tarapacá");
    } else if (paisSeleccionado === "Colombia" && departamentoSeleccionado === "Arauca"){
        agregarOpcionCiudad("Arauca");
        agregarOpcionCiudad("Arauquita");
        agregarOpcionCiudad("Cravo Norte");
        agregarOpcionCiudad("Fortul");
        agregarOpcionCiudad("Puerto Rondón");
        agregarOpcionCiudad("Saravena");
        agregarOpcionCiudad("Tame");  

    }else if(paisSeleccionado === "Colombia" && departamentoSeleccionado === "Atlantico"){
        agregarOpcionCiudad("Barranquilla");
        agregarOpcionCiudad("Baranoa");
        agregarOpcionCiudad("Campo de la Cruz");
        agregarOpcionCiudad("Candelaria");
        agregarOpcionCiudad("Galapa");
        agregarOpcionCiudad("Juan de Acosta");
        agregarOpcionCiudad("Luruaco");
        agregarOpcionCiudad("Malambo");
        agregarOpcionCiudad("Manatí");
        agregarOpcionCiudad("Palmar de Varela");
        agregarOpcionCiudad("Piojó");
        agregarOpcionCiudad("Polonuevo");
        agregarOpcionCiudad("Ponedera");
        agregarOpcionCiudad("Puerto Colombia");
        agregarOpcionCiudad("Repelón");
        agregarOpcionCiudad("Sabanagrande");
        agregarOpcionCiudad("Sabanalarga");
        agregarOpcionCiudad("Santa Lucía");
        agregarOpcionCiudad("Santo Tomás");
        agregarOpcionCiudad("Soledad");
        agregarOpcionCiudad("Suan");
        agregarOpcionCiudad("Tubará");
        agregarOpcionCiudad("Usiacurí");

    } else if (paisSeleccionado === "Colombia" && departamentoSeleccionado === "Bogotá") {
        agregarOpcionCiudad("Usaquén");
        agregarOpcionCiudad("Chapinero");
        agregarOpcionCiudad("Santa Fe");
        agregarOpcionCiudad("San Cristóbal");
        agregarOpcionCiudad("Usme");
        agregarOpcionCiudad("Tunjuelito");
        agregarOpcionCiudad("Bosa");
        agregarOpcionCiudad("Kennedy");
        agregarOpcionCiudad("Fontibón");
        agregarOpcionCiudad("Engativá");
        agregarOpcionCiudad("Suba");
        agregarOpcionCiudad("Barrios Unidos");
        agregarOpcionCiudad("Teusaquillo");
        agregarOpcionCiudad("Los Mártires");
        agregarOpcionCiudad("Antonio Nariño");
        agregarOpcionCiudad("Puente Aranda");
        agregarOpcionCiudad("La Candelaria");
        agregarOpcionCiudad("Rafael Uribe Uribe");
        agregarOpcionCiudad("Ciudad Bolívar");
        agregarOpcionCiudad("Sumapaz");
    }
}

function agregarOpcion(valor, selectId) {
    var option = document.createElement("option");
    option.text = valor;
    option.value = valor;
    document.getElementById(selectId).add(option);
}

function agregarOpcionCiudad(valor) {
    agregarOpcion(valor, "ciudades");
}
