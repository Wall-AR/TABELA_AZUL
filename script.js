// script.js
document.addEventListener('DOMContentLoaded', () => {
  const tableData = [
    {
      brand: '',
      logo: 'images/purafor-logo.png',
      colorVar: '--color-purafor',
      items: [
        { desc: 'Artrion 60caps ', unit: 37.79, tag: '' },
        { desc: 'Biotina em Gotas 30ml - Tutti Frutti', unit: 18.00, tag: 'gotas' },
        { desc: 'Beauty Blend 200g - Frutas Vermelhas', unit: 57.53, tag: '' },
        { desc: 'Reforce Hair 60 caps', unit: 25.65, tag: '' },
        { desc: '3 Magnésios 30 Caps', unit: 18.10, tag: '' },
        { desc: 'Cafeína + Beta Alanina Xtra 60caps', unit: 21.10, tag: 'novo' },
        { desc: 'Cálcio MDK + Z 60caps (Cálcio, Magnésio, Vit.D, Vit.K, Zinco)', unit: 20.93, tag: '' },
        { desc: 'Carbonato de Cálcio 60 Caps', unit: 16.14, tag: 'novo' },
        { desc: 'Coenzima Q10 200mg com vitamina E 30caps', unit: 36.79, tag: '' },
        { desc: 'Creatina Xtra 300G', unit: 51.02, tag: 'novo' },
        { desc: 'CO-Creatin 300g (Creatina com coenzima + vitaminas) Sabor Laranja', unit: 57.54, tag: '' },
        { desc: 'Creatina Gummies - Uva verde 40gomas', unit: 74.79, tag: 'novo' },
        { desc: 'Colágeno Tipo 2 30cap', unit: 19.79, tag: 'novo' },
        { desc: 'CurcuMAX 95% - Cúrcuma com Pimenta Preta 60 caps - ÂMBAR', unit: 15.12, tag: 'novo' },
        { desc: 'Curcumina com colágeno tipo 2 30ml - Gotas', unit: 20.90, tag: 'gotas' },
        { desc: 'Cúrcuma Longa com Curcumina 60caps', unit: 23.08, tag: '' },
        { desc: 'Caffeine 60caps - Microencapsulada 200mg Softgel', unit: 32.25, tag: '' },
        { desc: 'CO-MAG 60caps', unit: 34.33, tag: 'novo' },
        { desc: 'D3 + K2 30caps - 2000UI / 159mcg', unit: 11.71, tag: '' },
        { desc: 'Ferrofor + C 60caps', unit: 16.77, tag: '' },
        { desc: 'Feno Grego 60caps', unit: 20.45, tag: '' },
        { desc: 'GABA 400 60caps', unit: 17.58, tag: 'novo' },
        { desc: 'Morofor 120caps', unit: 33.74, tag: 'novo' },
        { desc: 'Melatonina com Triptofano 30caps', unit: 18.89, tag: '' },
        { desc: 'Magnésio Dimalato 60caps', unit: 20.36, tag: '' },
        { desc: 'Magnésio Inositol DIA (Taurina) 210g - Maracujá', unit: 53.94, tag: 'novo' },
        { desc: 'Magnésio Inositol NOITE (Melatonina) 210g - Maracujá', unit: 53.94, tag: 'novo' },
        { desc: 'Magnésio L-Treonato 60caps', unit: 16.18, tag: '' },
        { desc: 'Magnésio L-Treonato 60caps - ÂMBAR', unit: 16.03, tag: 'novo' },
        { desc: 'Magnésio L-Treonato Blister 30caps', unit: 23.15, tag: '' },
        { desc: 'Magnésio Quelato 60caps', unit: 17.59, tag: '' },
        { desc: 'Magnésio Soft 60caps', unit: 10.96, tag: 'novo' },
        { desc: 'Memo Ative 30caps', unit: 13.03, tag: '' },
        { desc: 'Melatokalm Gotas Sabor Maracujá 30ml (Melatonina)', unit: 19.11, tag: '' },
        { desc: 'Mag 6 60caps (seis magnésios)', unit: 21.85, tag: '' },
        { desc: 'Óleo de Primula 60caps Softgel', unit: 27.21, tag: '' },
        { desc: 'Óleo de Semente de Abóbora 1000mg 60cap', unit: 31.63, tag: 'novo' },
        { desc: 'Ômega 3 60caps 1gr Softgel', unit: 25.87, tag: 'novo' },
        { desc: 'Ômega 3, 6, 9 60caps 1gr Softgel', unit: 29.86, tag: '' },
        { desc: 'PEA-600 60caps', unit: 33.58, tag: 'novo' },
        { desc: 'PEA + Colágeno Tipo 2 60caps', unit: 36.26, tag: 'novo' },
        { desc: 'Picolinato de Cromo 30caps', unit: 13.75, tag: '' },
        { desc: 'PlenaMente 30caps', unit: 18.37, tag: '' },
        { desc: 'Própolis Verde 60caps', unit: 19.70, tag: 'novo' },
        { desc: 'Reartron 60caps', unit: 35.73, tag: '' },
        { desc: 'Vitamina B12 30caps', unit: 14.89, tag: '' },
        { desc: 'Vitam-B12 gotas 30ml', unit: 19.30, tag: 'gotas' },
        { desc: 'Vitamina K2 30caps', unit: 17.42, tag: '' },
        { desc: 'Zinco + L-Cisteina 30caps', unit: 12.69, tag: '' },
        { desc: 'SuperVita C 60caps', unit: 19.40, tag: 'novo' }
      ]
    },
    {
      brand: '',
      logo: 'images/reavita-logo.png',
      colorVar: '--color-reavita',
      items: [
        { desc: 'Amargo Detox 60cap', unit: 16.35, tag: '' },
        { desc: 'Ashwagandha 60caps', unit: 22.63, tag: 'novo' },
        { desc: 'Amora Miúra 60cap', unit: 18.85, tag: '' },
        { desc: 'Amora com Isoflavona 60cap', unit: 18.31, tag: '' },
        { desc: 'Calmim 60cap', unit: 19.33, tag: '' },
        { desc: 'Canela de Velho + Sucupira 60cap', unit: 17.42, tag: '' },
        { desc: 'Carvão Vegetal 60cap', unit: 18.16, tag: '' },
        { desc: 'Castanha da Índia 60cap', unit: 18.24, tag: '' },
        { desc: 'Cloreto de Magnésio PA 60cap', unit: 16.55, tag: '' },
        { desc: 'Cloreto de Magnésio PA + Sucupira 60cap', unit: 17.28, tag: '' },
        { desc: 'Colágeno Hidrolisado 60cap', unit: 18.53, tag: '' },
        { desc: 'Cúrcuma 95% + Pimenta Preta 60cap', unit: 18.17, tag: '' },
        { desc: 'Espinheira Santa 60cap', unit: 18.40, tag: '' },
        { desc: 'Ginkgo Biloba 60cap', unit: 18.18, tag: '' },
        { desc: 'Ginkgo + Castanha 60cap', unit: 19.72, tag: '' },
        { desc: 'L-Treonato Magnésio 60cap', unit: 21.00, tag: '' },
        { desc: 'Maca Peruana Negra 60cap', unit: 20.07, tag: '' },
        { desc: 'Mais Ativa 60cap', unit: 17.66, tag: '' },
        { desc: 'Óleo de Copaíba 1000mg 60cap', unit: 25.10, tag: 'novo' },
        { desc: 'Óleo de Sucupira 1000mg 60cap', unit: 24.09, tag: 'novo' },
        { desc: 'Ora Pro Nóbis 60cap', unit: 18.41, tag: '' },
        { desc: 'Seca Barriga com Laranja MORO 60cap', unit: 18.08, tag: '' },
        { desc: 'Tibulus Terrestris 40% 60cap', unit: 17.42, tag: '' },
        { desc: 'Tribulus + Maca Peruana 60cap', unit: 17.47, tag: '' },
        { desc: 'Uxi Amarelo + Unha de Gato 60cap', unit: 17.41, tag: '' },
        { desc: 'Valeriana 60cap', unit: 21.22, tag: '' },
      ]
    }
  ];

  const container = document.getElementById('tabela-container');

  tableData.forEach(brandData => {
    const tbl = document.createElement('table');
    tbl.className = 'table-brand';

    const colgroup = document.createElement('colgroup');
    ['70%', '30%'].forEach(w => {
     const col = document.createElement('col');
     col.style.width = w;
     colgroup.appendChild(col);
    });
    tbl.appendChild(colgroup);

    const bannerRow = document.createElement('tr');
    const bannerCell = document.createElement('th');
    bannerCell.colSpan = 2;
    const bannerDiv = document.createElement('div');
    bannerDiv.className = 'brand-banner';
    bannerDiv.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue(brandData.colorVar);
    const img = document.createElement('img');
    img.src = brandData.logo;
    img.alt = brandData.brand;
    bannerDiv.appendChild(img);
    bannerDiv.append(brandData.brand);
    bannerCell.appendChild(bannerDiv);
    bannerRow.appendChild(bannerCell);

    const thead = document.createElement('thead');
    thead.appendChild(bannerRow);
    const hdr = document.createElement('tr');
    hdr.innerHTML = `<th>Descrição do Produto</th><th>Unidade</th>`;
    thead.appendChild(hdr);
    tbl.appendChild(thead);

    const tbody = document.createElement('tbody');
    brandData.items.forEach(item => {
      const tr = document.createElement('tr');
      const tdDesc = document.createElement('td');
      tdDesc.textContent = item.desc;
      if (item.tag) {
        const span = document.createElement('span');
        span.className = `tag ${item.tag}`;
        span.textContent = item.tag.toUpperCase();
        tdDesc.appendChild(span);
      }
      tr.appendChild(tdDesc);

      const tdUnit = document.createElement('td');
      tdUnit.textContent = `R$ ${item.unit.toFixed(2)}`;
      tr.appendChild(tdUnit);

      tbody.appendChild(tr);
    });
    tbl.appendChild(tbody);
    container.appendChild(tbl);
  });

  // Botão de exportar via impressão
  document.getElementById('btn-export').addEventListener('click', () => {
    window.print();
  });

  // Alternância de tema
  document.getElementById('btn-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const btn = document.getElementById('btn-theme');
    btn.textContent = document.body.classList.contains('dark') ? 'Tema Claro' : 'Tema Escuro';
  });
});

















