// script.js
document.addEventListener('DOMContentLoaded', () => {
  const tableData = [
    {
      brand: '',
      logo: 'images/purafor-logo.png',
      colorVar: '--color-purafor',
      items: [
        { desc: 'Artrion 60caps', unit: 35.12, tag: '' },
        { desc: 'Biotina em Gotas 30ml - Tutti Frutti', unit: 16.73, tag: 'gotas' },
        { desc: 'Beauty Blend 200g - Frutas Vermelhas', unit: 53.47, tag: '' },
        { desc: 'Reforce Hair 60 caps', unit: 23.84, tag: '' },
        { desc: '3 Magnésios 30 Caps', unit: 16.82, tag: '' },
        { desc: 'Cálcio MDK + Z 60caps (Cálcio, Magnésio, Vit.D, Vit.K, Zinco)', unit: 19.45, tag: '' },
        { desc: 'Carbonato de Cálcio 60 Caps', unit: 16.14, tag: 'novo' },
        { desc: 'Coenzima Q10 200mg com vitamina E 30caps', unit: 34.19, tag: '' },
        { desc: 'Creatina Xtra 300G', unit: 47.41, tag: 'novo' },
        { desc: 'CO-Creatin 300g (Creatina com coenzima + vitaminas) Sabor Laranja', unit: 53.48, tag: '' },
        { desc: 'Creatina Gummies - Uva verde 40gomas', unit: 74.79, tag: 'novo' },
        { desc: 'Colágeno Tipo 2 60cap', unit: 18.39, tag: 'novo' },
        { desc: 'CurcuMAX 95% - Cúrcuma com Pimenta Preta 60 caps - ÂMBAR', unit: 15.12, tag: 'novo' },
        { desc: 'Curcumina com colágeno tipo 2 30ml - Gotas', unit: 19.43, tag: 'gotas' },
        { desc: 'Cúrcuma Longa com Curcumina 60caps', unit: 21.45, tag: '' },
        { desc: 'Caffeine 60caps - Microencapsulada 200mg Softgel', unit: 29.97, tag: '' },
        { desc: 'CO-MAG 60caps', unit: 31.90, tag: 'novo' },
        { desc: 'D3 + K2 30caps - 2000UI / 159mcg', unit: 10.88, tag: '' },
        { desc: 'Ferrofor + C 60caps', unit: 15.59, tag: '' },
        { desc: 'Feno Grego 60caps', unit: 19.01, tag: '' },
        { desc: 'GABA 400 60caps', unit: 17.58, tag: 'novo' },
        { desc: 'Morofor 120caps', unit: 31.36, tag: 'novo' },
        { desc: 'Melatonina com Triptofano 30caps', unit: 17.55, tag: '' },
        { desc: 'Magnésio Dimalato 60caps', unit: 18.92, tag: '' },
        { desc: 'Magnésio Inositol DIA (Taurina) 210g - Maracujá', unit: 50.13, tag: 'novo' },
        { desc: 'Magnésio Inositol NOITE (Melatonina) 210g - Maracujá', unit: 50.13, tag: 'novo' },
        { desc: 'Magnésio L-Treonato 60caps', unit: 15.04, tag: '' },
        { desc: 'Magnésio L-Treonato 60caps - ÂMBAR', unit: 16.03, tag: 'novo' },
        { desc: 'Magnésio L-Treonato Blister 30caps', unit: 21.52, tag: '' },
        { desc: 'Magnésio Quelato 60caps', unit: 16.35, tag: '' },
        { desc: 'Magnésio Soft 60caps', unit: 10.96, tag: 'novo' },
        { desc: 'Memo Ative 30caps', unit: 12.11, tag: '' },
        { desc: 'Melatokalm Gotas Sabor Maracujá 30ml (Melatonina)', unit: 17.76, tag: '' },
        { desc: 'Mag 6 60caps (seis magnésios)', unit: 20.30, tag: '' },
        { desc: 'Óleo de Primula 60caps Softgel', unit: 25.28, tag: '' },
        { desc: 'Óleo de Semente de Abóbora 1000mg 60cap', unit: 29.40, tag: 'novo' },
        { desc: 'Ômega 3 60caps 1gr Softgel', unit: 25.87, tag: 'novo' },
        { desc: 'Ômega 3, 6, 9 60caps 1gr Softgel', unit: 27.75, tag: '' },
        { desc: 'PEA-600 60caps', unit: 31.21, tag: 'novo' },
        { desc: 'PEA + Colágeno Tipo 2 60caps', unit: 33.70, tag: 'novo' },
        { desc: 'Picolinato de Cromo 30caps', unit: 12.78, tag: '' },
        { desc: 'PlenaMente 30caps', unit: 18.37, tag: '' },
        { desc: 'Própolis Verde 60caps', unit: 19.70, tag: 'novo' },
        { desc: 'Reartron 60caps', unit: 33.21, tag: '' },
        { desc: 'Vitamina B12 30caps', unit: 13.83, tag: '' },
        { desc: 'Vitam-B12 gotas 30ml', unit: 17.94, tag: 'gotas' },
        { desc: 'Vitamina K2 30caps', unit: 16.19, tag: '' },
        { desc: 'Zinco + L-Cisteina 30caps', unit: 11.79, tag: '' },
        { desc: 'SuperVita C 60caps', unit: 18.03, tag: 'novo' }
      ]
    },
    {
      brand: '',
      logo: 'images/reavita-logo.png',
      colorVar: '--color-reavita',
      items: [
        { desc: 'Amargo Detox 60cap', unit: 15.19, tag: '' },
        { desc: 'Ashwagandha 60caps', unit: 21.04, tag: 'novo' },
        { desc: 'Amora Miúra 60cap', unit: 17.52, tag: '' },
        { desc: 'Amora com Isoflavona 60cap', unit: 17.01, tag: '' },
        { desc: 'Calmim 60cap', unit: 17.96, tag: '' },
        { desc: 'Canela de Velho + Sucupira 60cap', unit: 16.19, tag: '' },
        { desc: 'Carvão Vegetal 60cap', unit: 16.87, tag: '' },
        { desc: 'Castanha da Índia 60cap', unit: 16.96, tag: '' },
        { desc: 'Cloreto de Magnésio PA 60cap', unit: 16.38, tag: '' },
        { desc: 'Cloreto de Mag  nésio PA + Sucupira 60cap', unit: 16.06, tag: '' },
        { desc: 'Colágeno Hidrolisado 60cap', unit: 16.06, tag: '' },
        { desc: 'Cúrcuma 95% + Pimenta Preta 60cap', unit: 16.88, tag: '' },
        { desc: 'Espinheira Santa 60cap', unit: 15.14, tag: '' },
        { desc: 'Ginkgo Biloba 60cap', unit: 16.89, tag: '' },
        { desc: 'Ginkgo + Castanha 60cap', unit: 18.33, tag: '' },
        { desc: 'L-Treonato Magnésio 60cap', unit: 19.52, tag: '' },
        { desc: 'Maca Peruana Negra 60cap', unit: 18.65, tag: '' },
        { desc: 'Mais Ativa 60cap', unit: 16.41, tag: '' },
        { desc: 'Óleo de Copaíba 1000mg 60cap', unit: 23.33, tag: 'novo' },
        { desc: 'Óleo de Sucupira 1000mg 60cap', unit: 22.39, tag: 'novo' },
        { desc: 'Ora Pro Nóbis 60cap', unit: 17.11, tag: '' },
        { desc: 'Seca Barriga com Laranja MORO 60cap', unit: 16.81, tag: '' },
        { desc: 'Tibulus Terrestris 40% 60cap', unit: 16.19, tag: '' },
        { desc: 'Tribulus + Maca Peruana 60cap', unit: 16.24, tag: '' },
        { desc: 'Uxi Amarelo + Unha de Gato 60cap', unit: 16.18, tag: '' },
        { desc: 'Valeriana 60cap', unit: 19.72, tag: '' },
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













