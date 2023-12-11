import React from "react";

function DashboardProducts() {
  return (
    <div className="Dashboard">
      <main className="main">
        <a href="/products/visualize">Visualizar produtos</a>
        <a href="/products/register">Cadastrar produto</a>
        <a href="/services/visualize">Visualizar serviços</a>
        <a href="/services/register">Registrar serviço</a>
      </main>
    </div>
  );
}

export default DashboardProducts;
