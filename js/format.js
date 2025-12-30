 
const formatador = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

  export function formatCurreny(valor) {
  const valorLimpo = valor.replace(/\D/g, '')
  const valorNumerico = Number(valorLimpo) / 100
    
  return formatador.format(valorNumerico);
}

export function mesesTrabalhados(meses){
  if (meses < 1) {
    meses = 1     
  } else if( meses > 12){
   meses = 12
  }

  return meses
}