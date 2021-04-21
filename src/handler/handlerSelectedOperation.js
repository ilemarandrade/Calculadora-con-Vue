export default function handlerSelectedOperation(
  total,
  valores,
  result,
  title
) {
  let lengthTotal = total.length;

  if (
    /[+*/]/.test(total[lengthTotal - 2]) &&
    total[lengthTotal - 1] === "-" &&
    /[+*/]/.test(title)
  ) {
    return {
      total: total.slice(0, -2) + title,
      valores: title,
      result,
    };
  }

  if (result !== "") {
    return {
      total: valores,
      valores: title,
      result: "",
    };
  }
  if (valores.match(/[+*/]/) && title === "-") {
    return {
      total: total + title,
      valores: title,
      result,
    };
  }

  if (valores.match(/[-+*/]/)) {
    return {
      total,
      valores,
      result,
    };
  }
  if (valores.match(/[0-9]/)) {
    return {
      total: valores,
      valores: title,
      result,
    };
  }
  if (total === "") {
    return {
      total: valores + title,
      valores: title,
      result,
    };
  }
  if (total !== "") {
    return {
      total: total + valores,
      valores: title,
      result,
    };
  }

  return {
    total: total + valores,
    valores: title,
    result,
  };
}
