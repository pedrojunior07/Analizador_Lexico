import React, { useMemo } from 'react';
import { AnalysisResult, WasteCategory } from '../types';
import { wasteCategories } from '../data/wasteCategories';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import WasteCategoryCard from './WasteCategoryCard';

interface DashboardProps {
  history: AnalysisResult[];
}

const Dashboard: React.FC<DashboardProps> = ({ history }) => {
  const stats = useMemo(() => {
    const categoryCount: Record<WasteCategory, number> = {
      organic: 0,
      recyclable: 0,
      metal: 0,
      glass: 0,
      plastic: 0,
      paper: 0,
      electronic: 0,
      hazardous: 0
    };

    history.forEach(result => {
      categoryCount[result.category]++;
    });

    return categoryCount;
  }, [history]);

  const chartData = useMemo(() => {
    return wasteCategories
      .map(cat => ({
        name: cat.name,
        value: stats[cat.id],
        color: cat.color
      }))
      .filter(item => item.value > 0);
  }, [stats]);

  const totalAnalyses = history.length;
  const avgConfidence = history.length > 0
    ? Math.round(history.reduce((sum, r) => sum + r.confidence, 0) / history.length)
    : 0;

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Total de Análises</p>
              <p className="text-4xl font-bold mt-2">{totalAnalyses}</p>
            </div>
            <div className="text-5xl opacity-80">📊</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Confiança Média</p>
              <p className="text-4xl font-bold mt-2">{avgConfidence}%</p>
            </div>
            <div className="text-5xl opacity-80">✓</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Categorias Detectadas</p>
              <p className="text-4xl font-bold mt-2">{chartData.length}</p>
            </div>
            <div className="text-5xl opacity-80">🗂️</div>
          </div>
        </div>
      </div>

      {/* Category Cards */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Categorias de Resíduos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {wasteCategories.map(category => (
            <WasteCategoryCard
              key={category.id}
              category={category}
              count={stats[category.id]}
            />
          ))}
        </div>
      </div>

      {/* Charts */}
      {chartData.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pie Chart */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Distribuição por Categoria
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Quantidade por Categoria
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
