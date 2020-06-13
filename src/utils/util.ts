export const getIdTypeAbreviation = (idType: string) => {
  switch (idType) {
    case "Cedula Ciudadanía":
      return "CC";
    case "NIT":
      return "NIT";
    case "Cedula Extrangería":
      return "CE";
    case "Registro Civil":
      return "RC";
    case "Tarjeta de Identidad":
      return "TI";
    case "Otro":
      return "Otro";
    default:
      return "N/A";
  }
};
