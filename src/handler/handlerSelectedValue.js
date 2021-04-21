export default function handlerSelectedValue(total, valores, result, title) {
  if (valores === "0" && title === "0") {
    return {
      total,
      valores,
      result,
    };
  }
  if (result !== "") {
    return {
      total: title,
      valores: title,
      result: "",
    };
  }

  if (valores === "0" && title !== "0") {
    return {
      valores: title,
      total,
      result,
    };
  }
  if (valores.match(/[-+*/]/) && title !== "0") {
    let stateTotal = total[total.length - 1];
    let stateValores = valores[valores.length - 1];
    if (/[-+*/]/.test(stateValores) && /[0-9]/.test(stateTotal)) {
      return {
        total: total + valores,
        valores: title,
        result,
      };
    }

    return {
      total: total,
      valores: title,
      result,
    };
  }
  if (valores !== "0") {
    return {
      valores: title,
      total,
      result,
    };
  }
  if (valores.match(/[.]/)) {
    returntitle === "."
      ? {
          valores: valores,
          total,
          result,
        }
      : {
          valores: valores + title,
          total,
          result,
        };
  }
  return {
    valores: valores + title,
    total,
    result,
  };
}
