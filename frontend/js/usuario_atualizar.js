let resposta = document.getElementById('resposta')
let btn_buscar = document.getElementById('btn_buscar')
let btn_atualizar = document.getElementById('btn_atualizar')

btn_buscar.addEventListener('click', () => {
    const codigo = document.getElementById('codigo').value

    if (!codigo) {
        resposta.innerHTML = '<p style="color: #ffaa00;">Informe o código do usuário para realizar a busca!</p>'
        return
    }

    fetch(`http://localhost:3000/usuarios/${codigo}`)
    .then(res => res.json())
    .then(dados => {
        if (!dados.codUsuario) {
            resposta.innerHTML = `<p style="color: #ffaa00;">${dados.message}</p>`
            return
        }

        document.getElementById('nome').value = dados.nome
        document.getElementById('sobrenome').value = dados.sobrenome
        document.getElementById('idade').value = dados.idade
        document.getElementById('email').value = dados.email
        document.getElementById('telefone').value = dados.telefone || ''
        document.getElementById('endereco').value = dados.endereco || ''
        document.getElementById('cidade').value = dados.cidade || ''
        document.getElementById('estado').value = dados.estado || ''

        resposta.innerHTML = '<p style="color: cyan;">Usuário localizado! Altere os campos desejados e clique em Atualizar.</p>'
    })
    .catch(err => {
        console.error('Erro ao buscar o usuário:', err)
        resposta.innerHTML = '<p style="color: red;">Erro ao buscar o usuário no servidor local.</p>'
    })
})

btn_atualizar.addEventListener('click', (e) => {
    e.preventDefault()

    const codigo = document.getElementById('codigo').value

    if (!codigo) {
        resposta.innerHTML = '<p style="color: #ffaa00;">Busque um usuário pelo código antes de atualizar!</p>'
        return
    }

    const usuario = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        idade: parseInt(document.getElementById('idade').value),
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        endereco: document.getElementById('endereco').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value
    }

    fetch(`http://localhost:3000/usuarios/${codigo}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
    .then(res => res.json())
    .then(dados => {
        if (dados.codUsuario) {
            resposta.innerHTML = `<p style="color: lightgreen;">Usuário de código ${dados.codUsuario} atualizado com sucesso!</p>`
        } else {
            resposta.innerHTML = `<p style="color: #ffaa00;">${dados.message}</p>`
        }
    })
    .catch(err => {
        console.error('Erro ao atualizar o usuário:', err)
        resposta.innerHTML = '<p style="color: red;">Erro ao atualizar o usuário no servidor local.</p>'
    })
})
