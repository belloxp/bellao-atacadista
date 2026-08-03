let resposta = document.getElementById('resposta')
let btn_apagar = document.getElementById('btn_apagar')

btn_apagar.addEventListener('click', () => {
    const codigo = document.getElementById('codigo').value

    if (!codigo) {
        resposta.innerHTML = '<p style="color: #ffaa00;">Informe o código do usuário que deseja apagar!</p>'
        return
    }

    const confirmacao = confirm(`Tem certeza que deseja apagar o usuário de código ${codigo}?`)
    if (!confirmacao) {
        resposta.innerHTML = '<p style="color: cyan;">Operação de exclusão cancelada pelo usuário.</p>'
        return
    }

    fetch(`/usuarios/${codigo}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = `<p style="color: lightgreen;">${dados.message}</p>`
        document.getElementById('codigo').value = ''
    })
    .catch(err => {
        console.error('Erro ao apagar o usuário:', err)
        resposta.innerHTML = '<p style="color: red;">Erro ao apagar o usuário no servidor local.</p>'
    })
})
