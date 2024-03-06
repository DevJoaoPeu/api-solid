# API com uso de principios do solid

Esta é uma API desenvolvida em TypeScript e Node.js, seguindo os princípios do SOLID e uma arquitetura bem definida. Todos os componentes foram cuidadosamente projetados para garantir uma aplicação robusta e de fácil manutenção.

![Image Preview](https://github.com/DevJoaoPeu/api-solid/blob/main/public/printscreen.png)

## Estrutura do Projeto

A estrutura do projeto segue um padrão que separa as responsabilidades em diferentes camadas, promovendo uma melhor organização e escalabilidade do código.

```
api-solid/
│
├── src/
│ ├── entities/ # Entidades da aplicação
│ ├── repositories/ # Camada de acesso a dados
│ ├── services/ # Camada de serviços da aplicação
│ ├── tests/utils # Simulação de data futura, para facilitar os testes
│
└── README.md # Este arquivo
```



## Testes Unitários

A API possui 100% de cobertura de testes unitários, garantindo que cada componente funcione conforme o esperado e que mudanças no código não introduzam regressões. Os testes são executados usando o framework Vitest.

## Como Executar

Para executar a API localmente, siga estas etapas:

1. Clone o repositório:

```shell
git clone https://github.com/DevJoaoPeu/api-solid.git
```

2. Instale as dependências:

```
cd api-solid
npm install
```

3. Execute os testes:

```
yarn test
```

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, por favor, abra uma issue ou envie um pull request.
