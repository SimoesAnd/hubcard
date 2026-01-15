import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

const LanguageChart = ({ repos }) => {
  // 1. Lógica para extrair e contar as linguagens
  const processData = () => {
    const stats = {};
    
    repos.forEach(repo => {
      if (repo.language) {
        stats[repo.language] = (stats[repo.language] || 0) + 1;
      }
    });

    // Transforma objeto em array para o gráfico
    const data = Object.keys(stats).map(lang => ({
      name: lang,
      value: stats[lang]
    }));

    // Ordena do maior para o menor e pega os top 5
    return data.sort((a, b) => b.value - a.value).slice(0, 5);
  };

  const data = processData();

  if (data.length === 0) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
      <h3 className="text-lg font-semibold text-white mb-4 border-b border-slate-800 pb-2">
        Top Linguagens
      </h3>
      
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="rgba(0,0,0,0)" />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px', color: '#fff' }}
              itemStyle={{ color: '#fff' }}
            />
            <Legend verticalAlign="bottom" height={36} iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LanguageChart;