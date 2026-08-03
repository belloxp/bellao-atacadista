let resposta = document.getElementById('resposta')
let btn_listar = document.getElementById('btn_listar')
let container_tabela = document.getElementById('container_tabela')

btn_listar.addEventListener('click', () => {
    fetch('/usuarios')
    .then(res => res.json())
    .then(dados => {
        console.log("=========================================")
        console.log("USUÁRIOS RECEBIDOS DO BACK-END:")
        console.log(dados)
        console.log("=========================================")

        if (dados.length === 0) {
            resposta.innerHTML = 'Nenhum usuário cadastrado no banco de dados!'
            container_tabela.innerHTML = ''
            return
        }

        resposta.innerHTML = `Sucesso! ${dados.length} usuários encontrados no banco.`

        let tabela = `
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Idade</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
        `

        for (let i = 0; i < dados.length; i++) {
            tabela += `
                <tr>
                    <td>${dados[i].codUsuario}</td>
                    <td>${dados[i].nome}</td>
                    <td>${dados[i].sobrenome}</td>
                    <td>${dados[i].idade}</td>
                    <td>${dados[i].email}</td>
                    <td>${dados[i].telefone || '-'}</td>
                    <td>${dados[i].cidade || '-'}</td>
                    <td>${dados[i].estado || '-'}</td>
                </tr>
            `
        }

        tabela += '</tbody></table>'
        container_tabela.innerHTML = tabela
    })
    .catch(err => {
        console.error('Erro ao listar os usuários:', err)
        resposta.innerHTML = 'Erro ao carregar os usuários do servidor local.'
    })
})
