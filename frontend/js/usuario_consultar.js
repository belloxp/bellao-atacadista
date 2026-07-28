let resposta = document.getElementById('resposta')
let btn_consultar = document.getElementById('btn_consultar')
let container_tabela = document.getElementById('container_tabela')

btn_consultar.addEventListener('click', () => {
    const codigo = document.getElementById('codigo').value

    if (!codigo) {
        resposta.innerHTML = '<p style="color: #ffaa00;">Informe o código do usuário para realizar a consulta!</p>'
        return
    }

    fetch(`http://localhost:3000/usuarios/${codigo}`)
    .then(res => res.json())
    .then(dados => {
        console.log("=========================================")
        console.log("USUÁRIO CONSULTADO:")
        console.log(dados)
        console.log("=========================================")

        if (!dados.codUsuario) {
            resposta.innerHTML = `<p style="color: #ffaa00;">${dados.message}</p>`
            container_tabela.innerHTML = ''
            return
        }

        resposta.innerHTML = `<p style="color: lightgreen;">Usuário localizado com sucesso!</p>`

        container_tabela.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Idade</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Endereço</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${dados.codUsuario}</td>
                        <td>${dados.nome}</td>
                        <td>${dados.sobrenome}</td>
                        <td>${dados.idade}</td>
                        <td>${dados.email}</td>
                        <td>${dados.telefone || '-'}</td>
                        <td>${dados.endereco || '-'}</td>
                        <td>${dados.cidade || '-'}</td>
                        <td>${dados.estado || '-'}</td>
                    </tr>
                </tbody>
            </table>
        `
    })
    .catch(err => {
        console.error('Erro ao consultar o usuário:', err)
        resposta.innerHTML = '<p style="color: red;">Erro ao consultar o usuário no servidor local.</p>'
    })
})
