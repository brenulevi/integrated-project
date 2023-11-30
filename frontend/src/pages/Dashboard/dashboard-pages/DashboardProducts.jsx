import React from "react";

function DashboardProducts() {
  return (
    <div className="Dashboard">
      <main className="main">
        <a href="/products/register">Cadastrar produto</a>
        <a>Alterar produto</a>
        <a>Deletar produto</a>
        <a>Visualizar produtos</a>
      </main>
    </div>
  );
}

export default DashboardProducts;
