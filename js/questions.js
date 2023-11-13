// Array of objects
/* {
    q: `Simplify the expression \\(-3+7\\times 2 \\)`,
    options: [`\\(8\\)`, `\\(11\\)`, `\\(3\\)`, `\\(6\\)`],
    answer: 1,
  },
  {
    q: `Solve for \\(x\\) in \\(x^2+5x+6=0\\)`,
    options: [`\\(x=3,2\\)`, `\\(x=-3,-2\\)`, `\\(x=6,1\\)`, `\\(x=6,-1\\)`],
    answer: 1,
  },
  {
    q: `The quadratic equation is given by \\(x=\\frac{-b\\pm \\sqrt{b^2-4ac}}{2a}\\)`,
    options: ["true", "false"],
    answer: 0,
  },
  {
    q: `Simplify: \\(4^{\\frac{3}{2}}\\)`,
    options: [`\\(2\\)`, `\\(8\\)`, `\\(16\\)`, `\\(32\\)`],
    answer: 1,
  },
  {
    q: `What is \\(22+6\\)?`,
    options: [`\\(99\\)`, `\\(56\\)`, `\\(16\\)`, `\\(28\\)`],
    answer: 3,
  },
  {
    q: "How many squares are there in the following figure?",
    options: ["35", "30", "40", "50"],
    answer: 2,
    img: "img/square.jpg",
  },
  {
    q: "Count the triangles in the picture below.",
    options: ["7", "9", "12", "13"],
    answer: 3,
    img: "img/triangle.jpg",
  },
  {
    q: `Solve for \\(x\\)`,
    options: [`\\(7\\)`, `\\(9\\)`, `\\(12\\)`, `\\(13\\)`],
    answer: 3,
  }, */
const quiz = [
  /* Translating Verbal Phrases into Mathematical Statements */    
  {
    q: `Translate the following: \\(x\\) varies directly as the square of \\(y\\)`,
    options: [`\\(x=ky\\)`, `\\(x=ky^2\\)`, `\\(x=\\dfrac{k}{y^2}\\)`, `\\(x=\\dfrac{k}{y}\\)`],
    answer: 1,
  },
  {
    q: `Translate the following into a mathematical statment: \\(A\\) varies inversely as the square root of \\(B\\)`,
    options: [`\\(A=\\dfrac{k}{\\sqrt{B}}\\)`, `\\(A=kB^2\\)`, `\\(A=\\dfrac{k}{B^2}\\)`, `\\(A=\\dfrac{k}{\\sqrt[3]{B}}\\)`],
    answer: 0,
  },
  {
    q: `Translate the following into a mathematical statement: \\(z\\) varies jointly as the cube  of \\(x\\) and the square root of \\(y\\)`,
    options: [`\\(z=kx^3\\sqrt{y}\\)`, `\\(z=kx^3y^2\\)`, `\\(z=k\\sqrt[3]{x}y^2\\)`, `\\(z=\\dfrac{kx^3}{\\sqrt{y}}\\)`],
    answer: 0,
  },
  /* Direct Variation */
  {
    q: `What is the relationship between the given quantities: distance \\(d\\) travelled with respect to time \\(t\\)`,
    options: [`direct`, `inverse`],
    answer: 0,
  },
  {
    q: `If \\(y\\) varies directly as \\(x\\) and \\(y=5\\) when \\(x=10\\), what is the constant of variation? `,
    options: [`\\(k=\\dfrac{1}{2}\\)`, `\\(k=2\\)`, `\\(k=4\\)`, `\\(k=50\\)`],
    answer: 0,
  },
  {
    q: `If \\(y\\) varies directly as the square of \\(x\\) and \\(y=12\\) when \\(x=2\\), what is the equation of variation? `,
    options: [`\\(y=3x^2\\)`, `\\(y=6x\\)`, `\\(y=2x^2\\)`, `\\(y=4x^2\\)`],
    answer: 0,
  },
  {
    q: `If \\(c\\) varies directly as the square root of \\(d\\) and \\(c=14\\) when \\(d=64\\), find \\(c\\) when \\(d=256\\)? `,
    options: [`\\(28\\)`, `\\(24\\)`, `\\(18\\)`, `\\(26\\)`],
    answer: 0,
  },
  {
    q: `The distance required to stop a car varies directly as the square of its speed. If \\(250\\) feet are required to stop a car traveling \\(60\\) miles per hour, how many feet are required to stop a car traveling \\(96\\) miles per hour?`,
    options: [`\\(640\\ feet\\)`, `\\(720\\ feet\\)`, `\\(560\\ feet\\)`, `\\(840\\ feet\\)`],
    answer: 0,
  },
/* Inverse Variation */
  {
    q: `Translate the following into a mathematical statement: \\(z\\) varies inversely as the cube root of \\(y\\)`,
    options: [`\\(z=\\dfrac{k}{\\sqrt[3]{y}}\\)`, `\\(z=k\\sqrt[3]{y}\\)`, `\\(z=ky^3\\)`, `\\(z=\\dfrac{k}{y^3}\\)`],
    answer: 0,
  },
  {
    q: `If \\(N\\) varies inversely as \\(M\\) and \\(N=12\\) when \\(M=3\\), find the equation of variation `,
    options: [`\\(N=\\dfrac{36}{M}\\)`, `\\(N=36M\\)`, `\\(N=4M\\)`, `\\(N=\\dfrac{4}{M}\\)`],
    answer: 0,
  },
  {
    q: `If \\(m\\) varies inversely as \\(t\\) and \\(m=24\\) when \\(t=3\\), what is the value of \\(k\\) ?`,
    options: [`\\(k=72\\)`, `\\(k=8\\)`, `\\(k=6\\)`, `\\(k=36\\)`],
    answer: 0,
  },
  {
    q: `If \\(y\\) varies inversely as \\(x\\) and \\(y=24\\) when \\(x=3\\), which of the following could be its equation of variation?`,
    options: [`\\(xy=72\\)`, `\\(y=72x\\)`, `\\(y=\\dfrac{36}{x}\\)`, `\\(y=\\dfrac{72}{x^2}\\)`],
    answer: 0,
  },
  {
    q: `The number of days to finish a job is inversely proportional to the number of men working. If \\(6\\) men can finish a job in \\(2\\) days, then how many days will \\(4\\) men finish the same job? `,
    options: [`\\(3\\ days\\)`, `\\(8\\ days\\)`, `\\(6\\ days\\)`, `\\(24\\ days\\)`],
    answer: 0,
  },
  {
    q: `The number of days to finish a job is inversely proportional to the number of men working. If \\(8\\) men can finish a job in \\(6\\) days, then how many days will \\(12\\) men finish the same job? `,
    options: [`\\(4\\ days\\)`, `\\(8\\ days\\)`, `\\(12\\ days\\)`, `\\(10\\ days\\)`],
    answer: 0,
  },
  {
    q: `If \\(y\\) varies inversely as \\(x\\) and \\(y=16\\) when \\(x=9\\), find \\(y\\) when \\(x=18\\).`,
    options: [`\\(8\\)`, `\\(6\\)`, `\\(12\\)`, `\\(7\\)`],
    answer: 0,
  },
  {
    q: `What is the relationship between the given quantities: speed and time to reach a fixed destination?`,
    options: [`inverse`, `direct`],
    answer: 0,
  },
/* Joint Variation */
  {
    q: `Translate the following into a mathematical statement: \\(M\\) varies jointly as the cube of \\(N\\) and the square root of \\(P\\)`,
    options: [`\\(M=kN^3\\sqrt{P}\\)`, `\\(M=kN^2\\sqrt[3]{P}\\)`, `\\(M=kN^3c^2\\)`, `\\(M=k\\sqrt[3]{N}c^2\\)`],
    answer: 0,
  },
  {
    q: `Translate the following into a mathematical statement: The volume of a cylinder \\(V\\) varies jointly as the square of its radius \\(r\\) and its height \\(h\\)`,
    options: [`\\(V=kr^2h\\)`, `\\(V=krh^2\\)`, `\\(V=\\dfrac{kr^2}{h}\\)`, `\\(V=\\dfrac{kr}{h}\\)`],
    answer: 0,
  },
  {
    q: `Find the equation of variation where \\(a\\) varies jointly as \\(b\\) and \\(c\\), and \\(a=36\\) when \\(b=3\\) and \\(c=4\\)`,
    options: [`\\(a=3bc\\)`, `\\(a=4bc\\)`, `\\(a=12bc\\)`, `\\(a=\\dfrac{3b}{c}\\)`],
    answer: 0,
  },
  {
    q: `If \\(y\\) varies jointly as \\(x\\) and \\(z\\) and \\(y=45\\) when \\(x=18\\) and \\(z=10\\), find \\(y\\) when \\(x=20\\) and \\(z=30\\)`,
    options: [`\\(y=150\\)`, `\\(y=120\\)`, `\\(y=180\\)`, `\\(y=160\\)`],
    answer: 0,
  },
  {
    q: `The area \\(A\\) of a triangle varies jointly as its base \\(b\\) and its altitude \\(h\\). If \\(A=65\\ cm^2\\) when \\(b=10\\ cm\\) and \\(h=13\\ cm\\), find the area of a triangle whose base is \\(8\\ cm\\) and whose altitude is \\(11\\ cm\\)`,
    options: [`\\(A=44\\ cm^2\\)`, `\\(A=54\\ cm^2\\)`, `\\(A=88\\ cm^2\\)`, `\\(A=176\\ cm^2\\)`],
    answer: 0,
  },
  {
    q: `\\(y\\) varies jointly as \\(x\\) and \\(z\\). If \\(y = 18\\) when \\(x = 3\\) and \\(z = 4\\), find \\(y\\) when \\(x = 6\\) and \\(z = 8\\)`,
    options: [`\\(y=72\\)`, `\\(y=36\\)`, `\\(y=24\\)`, `\\(y=48\\)`],
    answer: 0,
  },
 /* Combined Variation */
  {
    q: `A quantity \\(x\\) varies directly with the square of \\(y\\) and inversely with the cube root of \\(z\\). If \\(x = 6\\) when \\(y = 2\\) and \\(z = 8\\), find \\(x\\) when \\(y = 1\\) and \\(z = 27\\)`,
    options: [`\\(x=1\\)`, `\\(x=2\\)`, `\\(x=3\\)`, `\\(x=4\\)`],
    answer: 0,
  },
{
    q: `Translate the following into a mathematical statement: \\(W\\) varies jointly as \\(c\\) and the square of \\(a\\) and inversely as \\(b\\)`,
    options: [`\\(W=\\dfrac{kca^2}{b}\\)`, `\\(W=\\dfrac{kc^2a}{b}\\)`, `\\(W=\\dfrac{kc^2a^2}{b}\\)`, `\\(W=\\dfrac{kc^2a}{b^2}\\)`],
    answer: 0,
  },
{
    q: `The electrical resistance \\(R\\) of a wire varies directly as its length \\(\\ell\\) and inversely as the square of its diameter \\(d\\)`,
    options: [`\\(R=\\dfrac{k\\ell}{d^2}\\)`, `\\(R=\\dfrac{k\\ell^2}{d}\\)`, `\\(R=\\dfrac{k\\ell}{d}\\)`, `\\(R=k\\ell d^2\\)`],
    answer: 0,
  },
  {
    q: `If \\(z\\) varies directly as \\(x\\) and inversely as \\(y\\), and \\(z=9\\) when \\(x=6\\) and \\(y=2\\), find \\(z\\) when \\(x=8\\) and \\(y=12\\).`,
    options: [`\\(z=2\\)`, `\\(z=3\\)`, `\\(z=4\\)`, `\\(z=6\\)`],
    answer: 0,
  },
  {
    q: `If \\(r\\) varies directly as \\(s\\) and inversely as the square of  \\(u\\), and \\(r=2\\) when \\(s=18\\) and \\(u=2\\), find \\(r\\) when \\(u=3\\) and \\(s=27\\).`,
    options: [`\\(r=\\dfrac{4}{3}\\)`, `\\(r=\\dfrac{3}{4}\\)`, `\\(r=6\\)`, `\\(r=9\\)`],
    answer: 0,
  },
  {
    q: `\\(y\\) varies directly as the square root of \\(x\\) and inversely as \\(z\\). If \\(y = 10\\) when \\(x = 9\\) and \\(z = 12\\), find \\(y\\) when \\(x = 16\\) and \\(z = 10\\)`,
    options: [`\\(x=16\\)`, `\\(x=12\\)`, `\\(x=18\\)`, `\\(x=14\\)`],
    answer: 0,
  },
  {
    q: `Translate the following into a mathematical statement: \\(y\\) varies directly as the square  of \\(x\\) and inversely as the square root of \\(z\\)`,
    options: [`\\(y=\\dfrac{kx^2}{\\sqrt{z}}\\)`, `\\(y=\\dfrac{kx^2}{z^2}\\)`, `\\(y=\\dfrac{k\\sqrt{x}}{\\sqrt{z}}\\)`, `\\(y=kx^2\\sqrt{z}\\)`],
    answer: 0,
  },
  {
    q: "Which of the following could be the equation of variation for the given table?",
    options: [`\\(y=\\dfrac{72}{x}\\)`,`\\(y=72x\\)`,`\\(y=72x^2\\)`,`\\(y=\\dfrac{72}{x^2}\\)` ],
    answer: 0,
    img: "img/table.png",
  },
];
