// script.js
document.addEventListener('DOMContentLoaded', () => {
  const tableData = [
    {
      brand: '',
      logo: 'images/purafor-logo.png',
      colorVar: '--color-purafor',
      items: [
        { desc: 'Artrion 60caps', unit: 35.83, tag: '' },
        { desc: 'Biotina em Gotas 30ml - Tutti Frutti', unit: 20.57, tag: 'gotas' },
        { desc: 'Beauty Blend 200g - Frutas Vermelhas', unit: 72.20, tag: '' },
        { desc: 'Reforce Hair 60 caps', unit: 25.56, tag: '' },
        { desc: '3 Magnésios 30 Caps', unit: 15.61, tag: '' },
        { desc: 'Cálcio MDK + Z 60caps (Cálcio, Magnésio, Vit.D, Vit.K, Zinco)', unit: 21.66, tag: '' },
        { desc: 'Carbonato de Cálcio 60 Caps', unit: 16.14, tag: 'novo' },
        { desc: 'Coenzima Q10 200mg com vitamina E 30caps', unit: 33.39, tag: '' },
        { desc: 'Creatina Xtra 300G', unit: 47.06, tag: 'novo' },
        { desc: 'CO-Creatin 300g (Creatina com coenzima + vitaminas) Sabor Laranja', unit: 68.40, tag: '' },
        { desc: 'Colágeno Tipo 2 60cap', unit: 17.36, tag: 'novo' },
        { desc: 'Curcumina com colágeno tipo 2 30ml - Gotas', unit: 18.76, tag: 'gotas' },
        { desc: 'Cúrcuma Longa com Curcumina 60caps', unit: 18.76, tag: '' },
        { desc: 'Caffeine 60caps - Microencapsulada 200mg Softgel', unit: 23.53, tag: '' },
        { desc: 'CO-MAG 60caps', unit: 29.61, tag: 'novo' },
        { desc: 'D3 + K2 30caps - 2000UI / 159mcg', unit: 13.56, tag: '' },
        { desc: 'Ferrofor + C 60caps', unit: 14.88, tag: '' },
        { desc: 'Feno Grego 60caps', unit: 15.72, tag: '' },
        { desc: 'Morofor 120caps', unit: 22.98, tag: 'novo' },
        { desc: 'Melatonina com Triptofano 30caps', unit: 24.98, tag: '' },
        { desc: 'Magnésio Dimalato 60caps', unit: 18.47, tag: '' },
        { desc: 'Magnésio Inositol 210g - Maracujá', unit: 50.13, tag: 'novo' },
        { desc: 'Magnésio L-Treonato 60caps', unit: 18.18, tag: '' },
        { desc: 'Magnésio L-Treonato Blister 30caps', unit: 22.52, tag: '' },
        { desc: 'Magnésio Quelato 60caps', unit: 16.89, tag: '' },
        { desc: 'Memo Ative 30caps', unit: 15.65, tag: '' },
        { desc: 'Melatokalm Gotas Sabor Maracujá 30ml (Melatonina)', unit: 18.33, tag: 'novo' },
        { desc: 'Mag 6 60caps (seis magnésios)', unit: 16.45, tag: '' },
        { desc: 'Óleo de Primula 60caps Softgel', unit: 24.50, tag: '' },
        { desc: 'Óleo de Semente de Abóbora 1000mg 60cap', unit: 29.39, tag: 'novo' },
        { desc: 'Ômega 3 60caps 1gr Softgel', unit: 25.87, tag: 'novo' },
        { desc: 'Ômega 3, 6, 9 60caps 1gr Softgel', unit: 26.13, tag: '' },
        { desc: 'PEA-600 60caps', unit: 27.66, tag: 'novo' },
        { desc: 'PEA + Colágeno Tipo 2 60caps', unit: 29.69, tag: 'novo' },
        { desc: 'Picolinato de Cromo 30caps', unit: 14.13, tag: '' },
        { desc: 'PlenaMente 30caps', unit: 18.37, tag: '' },
        { desc: 'Própolis Verde 60caps', unit: 19.70, tag: 'novo' },
        { desc: 'Reartron 60caps', unit: 34.20, tag: '' },
        { desc: 'Vitamina B12 30caps', unit: 13.70, tag: '' },
        { desc: 'Vitam-B12 gotas 30ml', unit: 18.76, tag: 'gotas' },
        { desc: 'Vitamina K2 30caps', unit: 14.42, tag: '' },
        { desc: 'Zinco + L-Cisteina 30caps', unit: 13.41, tag: '' },
        { desc: 'SuperVita C 60caps', unit: 14.48, tag: 'novo' }
      ]
    },
    {
      brand: '',
      logo: 'images/reavita-logo.png',
      colorVar: '--color-reavita',
      items: [
        { desc: 'Amargo Detox 60cap', unit: 13.94, tag: '' },
        { desc: 'Ashwagandha 60caps', unit: 19.36, tag: 'novo' },
        { desc: 'Amora Miúra 60cap', unit: 15.00, tag: '' },
        { desc: 'Amora com Isoflavona 60cap', unit: 15.15, tag: '' },
        { desc: 'Calmim 60cap', unit: 16.78, tag: '' },
        { desc: 'Canela de Velho + Sucupira 60cap', unit: 15.30, tag: '' },
        { desc: 'Carvão Vegetal 60cap', unit: 14.56, tag: '' },
        { desc: 'Castanha da Índia 60cap', unit: 16.59, tag: '' },
        { desc: 'Cloreto de Magnésio PA 60cap', unit: 14.43, tag: '' },
        { desc: 'Cloreto de Magnésio PA + Sucupira 60cap', unit: 15.98, tag: '' },
        { desc: 'Colágeno Hidrolisado 60cap', unit: 16.06, tag: '' },
        { desc: 'Colágeno Tipo 2 60cap', unit: 20.86, tag: 'ultimo-lote' },
        { desc: 'Cúrcuma 95% + Pimenta Preta 60cap', unit: 14.57, tag: '' },
        { desc: 'Espinheira Santa 60cap', unit: 15.14, tag: '' },
        { desc: 'Ginkgo Biloba 60cap', unit: 16.16, tag: '' },
        { desc: 'Ginkgo + Castanha 60cap', unit: 16.74, tag: '' },
        { desc: 'L-Treonato Magnésio 60cap', unit: 18.18, tag: '' },
        { desc: 'Maca Peruana Negra 60cap', unit: 19.19, tag: '' },
        { desc: 'Mais Ativa 60cap', unit: 14.42, tag: '' },
        { desc: 'Óleo de Copaíba 1000mg 60cap', unit: 21.65, tag: 'novo' },
        { desc: 'Óleo de Sucupira 1000mg 60cap', unit: 20.20, tag: 'novo' },
        { desc: 'Ora Pro Nóbis 60cap', unit: 15.87, tag: '' },
        { desc: 'Seca Barriga com Laranja MORO 60cap', unit: 16.30, tag: '' },
        { desc: 'Tibulus Terrestris 40% 60cap', unit: 15.87, tag: '' },
        { desc: 'Tribulus + Maca Peruana 60cap', unit: 15.43, tag: '' },
        { desc: 'Uxi Amarelo + Unha de Gato 60cap', unit: 15.29, tag: '' },
        { desc: 'Valeriana 60cap', unit: 20.21, tag: '' },
        { desc: 'Concentrado de Inhame - 250ml', unit: 9.51, tag: 'chá' },
        { desc: 'Ora Pro Nóbis Chá Pronto - 250ml', unit: 9.62, tag: 'chá' }
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






