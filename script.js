const courses = [
  {
    course: 'Design',
    quantity: 21
  },
  {
    course: 'Empreendedorismo',
    quantity: 09
  },
  {
    course: 'Finanças',
    quantity: 32
  },
  {
    course: 'Marketing',
    quantity: 14
  },
  {
    course: 'Negócios',
    quantity: 29
  },
  {
    course: 'Tecnologia',
    quantity: 53
  },
];
const communityCompany = [
  'Rocketseat',
  'iFood',
  'TRANSvest',
  'Educa TRANSforma',
  'Cubos Academy',
  'Provi',
  'PretUX',
  'NuBank',
  'PrograMaria',
  'Mercado Livre',
  'VTEX',
  'XP Inc'
];
const nivelAwardsCards = [
  {
    nivel: 1,
    description: 'Certificado de voluntariado'
  },
  {
    nivel: 2,
    description: 'Descontos nos cursos pagos de nossos parceiros'
  },
  {
    nivel: 3,
    description: 'Participação dos sorteios de cursos e livros da plataforma'
  },
  {
    nivel: 4,
    description: 'Perfil em destaque. Indicação para vagas das empresas parceiras'
  },
  {
    nivel: 5,
    description: 'Auxilio carreira. Monitoria para auxiliar com a carreira que desejar seguir'
  },
];
const peopleImpacted = [10, 20, 40, 80, 100];
const encouragersCard = [
  {
    name: 'Rafael Garcia',
    impact: 52,
    awards: {
      certificated: true,
      award: 3,
      featured: false
    },
    trophy: 3
  },
  {
    name: 'Lara Almeida',
    impact: 73,
    awards: {
      certificated: true,
      award: 2,
      featured: false
    },
    trophy: 3
  },
  {
    name: 'Luiz Carlos',
    impact: 92,
    awards: {
      certificated: true,
      award: 4,
      featured: false
    },
    trophy: 4
  },
  {
    name: 'Debora Melo',
    impact: 23,
    awards: {
      certificated: true,
      award: 0,
      featured: false
    },
    trophy: 2
  },
  {
    name: 'Rodrigo Leite',
    impact: 12,
    awards: {
      certificated: true,
      award: 0,
      featured: false
    },
    trophy: 1
  },
  {
    name: 'Meire Lima',
    impact: 34,
    awards: {
      certificated: true,
      award: 0,
      featured: false
    },
    trophy: 2
  },
  {
    name: 'Jonas Matos',
    impact: 44,
    awards: {
      certificated: true,
      award: 1,
      featured: false
    },
    trophy: 3
  },
  {
    name: 'Duda Brum',
    impact: 97,
    awards: {
      certificated: true,
      award: 5,
      featured: true
    },
    trophy: 4
  },
];

const courseList = document.querySelector('.courses-options-list')
const btnTecnology = document.querySelector('.tecnology');

function tecnologyPage() {

}

btnTecnology.addEventListener('click', tecnologyPage)

console.log(btnTecnology)

// const courseCard = document.createElement('div');
// courseCard.classList = 'courses-options-card';
// const courseMap = courses.map(course => {
//   courseCard.innerHTML = `
//   <img src="./assets/courses/${course.course}.svg" alt="Curso de ${course.course}" />
//     <div class="info-card">
//       <span class="title">${course.course}</span>
//       <span class="subtitle">${course.quantity} cursos</span>
//     </div
//   `;
// });
// courseList.append(courseCard);
