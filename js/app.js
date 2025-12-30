import { formatCurreny, mesesTrabalhados } from "./format.js";

const inputSalario = document.getElementById('salario')
const inputDependentes = document.getElementById('dependentes')
const inputMeses = document.getElementById('meses')
const selectParcela = document.getElementById('parcela')


const btnLimpar = document.getElementById('clear')

inputSalario.addEventListener("input", (event)=>{
  const input = event.target;  
    input.value = formatCurreny(input.value)    
})

inputMeses.addEventListener('blur',(event)=>{
  const input = event.target

  input.value = mesesTrabalhados(input.value)
})

btnLimpar.addEventListener("click", (e)=>{
  e.preventDefault()
  inputSalario.value = ''
  inputDependentes.value = ''
  inputMeses.value = ''
  selectParcela.value = 'unica'
})




