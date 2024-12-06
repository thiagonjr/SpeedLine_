const fiberPlans = [
  {
    name: "Fibra Start",
    speed: 100,
    price: 89.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 100 Mbps",
      "Upload 50 Mbps"
    ]
  },
  {
    name: "Fibra Plus",
    speed: 200,
    price: 119.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 200 Mbps",
      "Upload 100 Mbps",
      "IP Fixo"
    ],
    highlighted: true
  },
  {
    name: "Fibra Ultra",
    speed: 300,
    price: 149.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 300 Mbps",
      "Upload 150 Mbps",
      "IP Fixo",
      "Prioridade no Atendimento"
    ]
  },
  {
    name: "Fibra Max",
    speed: 400,
    price: 199.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 400 Mbps",
      "Upload 200 Mbps",
      "IP Fixo",
      "Prioridade no Atendimento",
      "Atendimento VIP"
    ]
  }
];

const radioPlans = [
  {
    name: "Rádio Basic",
    speed: 10,
    price: 69.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 10 Mbps",
      "Upload 5 Mbps"
    ]
  },
  {
    name: "Rádio Plus",
    speed: 15,
    price: 89.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 15 Mbps",
      "Upload 7 Mbps",
      "IP Fixo"
    ],
    highlighted: true
  },
  {
    name: "Rádio Pro",
    speed: 20,
    price: 109.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 20 Mbps",
      "Upload 10 Mbps",
      "IP Fixo",
      "Prioridade no Atendimento"
    ]
  }
];

function createPlanCard(plan, type) {
  const card = document.createElement('div');
  card.className = `plan-card ${plan.highlighted ? 'highlighted' : ''}`;
  
  const icon = type === 'fiber' 
    ? '<svg class="plan-icon" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-7.743 16.33l-1.964 1.963A12 12 0 1 1 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/></svg>'
    : '<svg class="plan-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>';

  card.innerHTML = `
    ${icon}
    <h3 class="plan-name">${plan.name}</h3>
    <div class="plan-price">
      R$ ${plan.price.toFixed(2)}<span>/mês</span>
    </div>
    <div class="speed-info">
      <svg class="icon" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
      <span>${plan.speed} Mega ${type === 'fiber' ? 'Fibra' : 'Rádio'}</span>
    </div>
    <ul class="plan-features">
      ${plan.features.map(feature => `
        <li>
          <svg viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
          </svg>
          ${feature}
        </li>
      `).join('')}
    </ul>
    <a href="https://wa.me/553899999999?text=Olá! Gostaria de saber mais sobre o plano ${plan.name}." 
       class="plan-button" target="_blank" rel="noopener noreferrer">
      Assinar Agora
    </a>
  `;
  
  return card;
}

function initializePlans() {
  const fiberPlansContainer = document.querySelector('.fiber-plans');
  const radioPlansContainer = document.querySelector('.radio-plans');
  
  fiberPlans.forEach(plan => {
    fiberPlansContainer.appendChild(createPlanCard(plan, 'fiber'));
  });
  
  radioPlans.forEach(plan => {
    radioPlansContainer.appendChild(createPlanCard(plan, 'radio'));
  });
}

document.addEventListener('DOMContentLoaded', initializePlans);