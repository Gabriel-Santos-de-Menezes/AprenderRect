import './TabelasProdutos.css'
import React from 'react'
import alunos from '../../data/produtos'
import produtos from '../../data/produtos'

export default props => {

    const produtosJSX = produtos.map((produto, i) => {

        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : ''}>
                <td >
                    {produto.id}
                </td>
                <td >
                    {produto.nome}
                </td>
                <td >
                    R$ {produto.preco.toFixed(2).replace('.', ',')}
                </td>

            </tr>


        );
    });

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <th>Id</th>
                    <th>Produto</th>
                    <th>Preço</th>
                </thead>
                <tbody>

                    {produtosJSX}

                </tbody>
            </table>
        </div>
    )
}
