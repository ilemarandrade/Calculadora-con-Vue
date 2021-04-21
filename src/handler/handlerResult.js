export default function handlerResult(total, valores, result, title) {
  let operation;
  let stateTotal = total[total.length - 1];
  let stateValores = valores[valores.length - 1];
  if (/[-+*/]/.test(stateValores)) {
    operation = total;
    result = eval(operation);
    return {
      total: "",
      result: total + "=" + result,
      valores: result.toString(),
    };
  }
  if (/[-+*/]/.test(stateTotal)) {
    operation = total + valores;
    result = eval(operation);
    return {
      result: valores + "=" + result,
      valores: result.toString(),
      total,
    };
  }
}
