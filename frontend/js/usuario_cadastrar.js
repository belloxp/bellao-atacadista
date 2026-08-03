let resposta = document.getElementById('resposta')
let btn_cadastrar_manual = document.getElementById('btn_cadastrar_manual')
let btn_carga_lote = document.getElementById('btn_carga_lote')

btn_cadastrar_manual.addEventListener('click', (e) => {
    e.preventDefault()

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

    if (!usuario.nome || !usuario.sobrenome || !usuario.idade || !usuario.email) {
        resposta.innerHTML = '<p style="color: #ffaa00;">Preencha os campos obrigatórios: Nome, Sobrenome, Idade e E-mail!</p>'
        return
    }

    fetch('/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
    .then(res => res.json())
    .then(dados => {
        if (dados.codUsuario) {
            resposta.innerHTML = `<p style="color: lightgreen;">Usuário cadastrado com sucesso! Código gerado: ${dados.codUsuario}</p>`
            document.getElementById('form_manual').reset()
        } else {
            resposta.innerHTML = `<p style="color: #ffaa00;">${dados.message}</p>`
        }
    })
    .catch(err => {
        console.error('Erro ao cadastrar o usuário:', err)
        resposta.innerHTML = '<p style="color: red;">Falha ao cadastrar o usuário no servidor local.</p>'
    })
})

btn_carga_lote.addEventListener('click', (e) => {
    e.preventDefault()
    resposta.innerHTML = '<p style="color: yellow;">Buscando registros na API DummyJSON (https://dummyjson.com/users)...</p>'

    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(dadosExternos => {
        resposta.innerHTML = '<p style="color: cyan;">Dados recebidos com sucesso! Transmitindo lote para o back-end...</p>'

        return fetch('/usuarios/carga-lote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosExternos.users)
        })
    })
    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = `<p style="color: lightgreen;">${dados.message || 'Carga em lote finalizada com sucesso!'}</p>`
    })
    .catch(err => {
        console.error('Erro na carga em lote:', err)
        resposta.innerHTML = '<p style="color: red;">Falha ao processar os dados da carga em lote no servidor local.</p>'
    })
})
