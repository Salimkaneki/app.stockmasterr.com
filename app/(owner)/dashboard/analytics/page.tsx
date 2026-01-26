"use client";

import React, { useState } from "react";
import { PageLayout, PageHeader } from "../../../../components/ui/layout";
import { KPICard } from "../../../../components/data/KPI";
import {
  LuTrendingUp, LuTrendingDown, LuCalendar, LuChartBar,
  LuDollarSign, LuTarget, LuChartPie, LuArrowUpRight
} from "react-icons/lu";

// Données simulées pour les graphiques
interface PeriodData {
  period: string;
  ca: number;
  marge: number;
  couts: number;
}

const weeklyData: PeriodData[] = [
  { period: 'S1', ca: 125000, marge: 25000, couts: 100000 },
  { period: 'S2', ca: 142000, marge: 28400, couts: 113600 },
  { period: 'S3', ca: 138000, marge: 27600, couts: 110400 },
  { period: 'S4', ca: 156000, marge: 31200, couts: 124800 },
];

const monthlyData: PeriodData[] = [
  { period: 'Jan', ca: 520000, marge: 104000, couts: 416000 },
  { period: 'Fév', ca: 485000, marge: 97000, couts: 388000 },
  { period: 'Mar', ca: 612000, marge: 122400, couts: 489600 },
  { period: 'Avr', ca: 578000, marge: 115600, couts: 462400 },
];

const yearlyData: PeriodData[] = [
  { period: '2023', ca: 5200000, marge: 1040000, couts: 4160000 },
  { period: '2024', ca: 6800000, marge: 1360000, couts: 5440000 },
  { period: '2025', ca: 7200000, marge: 1440000, couts: 5760000 },
];

export default function AnalyticsPage() {
  const [period, setPeriod] = useState<'week' | 'month' | 'year'>('month');

  const getCurrentData = () => {
    switch (period) {
      case 'week': return weeklyData;
      case 'month': return monthlyData;
      case 'year': return yearlyData;
    }
  };

  const getPeriodLabel = () => {
    switch (period) {
      case 'week': return 'semaine';
      case 'month': return 'mois';
      case 'year': return 'année';
    }
  };

  const data = getCurrentData();
  const currentPeriod = data[data.length - 1];
  const previousPeriod = data[data.length - 2];
  const growth = previousPeriod ? ((currentPeriod.ca - previousPeriod.ca) / previousPeriod.ca) * 100 : 0;
  const marginRate = (currentPeriod.marge / currentPeriod.ca) * 100;

  return (
    <PageLayout className="bg-zinc-50/50">
      <PageHeader
        title="Analytics & Performance"
        description="Analyse des marges et évolution du CA"
      />

      <div className="max-w-350 mx-auto px-8 py-8">

        {/* Période Selector */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-sm font-medium text-zinc-600">Période :</span>
          <div className="flex bg-white border border-zinc-200 rounded-lg p-1">
            {[
              { key: 'week', label: 'Semaine' },
              { key: 'month', label: 'Mois' },
              { key: 'year', label: 'Année' }
            ].map((p) => (
              <button
                key={p.key}
                onClick={() => setPeriod(p.key as any)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  period === p.key
                    ? 'bg-zinc-900 text-white'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* KPIs principaux */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <KPICard
            title="CA Total"
            value={`${(currentPeriod.ca / 1000).toFixed(0)}K F`}
            trend={growth}
            icon={LuDollarSign}
          />
          <KPICard
            title="Marge"
            value={`${(currentPeriod.marge / 1000).toFixed(0)}K F`}
            trend={marginRate}
            icon={LuTarget}
          />
          <KPICard
            title="Coûts"
            value={`${(currentPeriod.couts / 1000).toFixed(0)}K F`}
            trend={0}
            icon={LuChartPie}
          />
          <KPICard
            title="Tendance"
            value={growth >= 0 ? "Croissance" : "Déclin"}
            trend={growth}
            icon={growth >= 0 ? LuTrendingUp : LuTrendingDown}
          />
        </div>

        {/* Graphique principal */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-8 mb-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold text-zinc-900">Évolution du CA & Marges</h2>
              <p className="text-sm text-zinc-500">Par {getPeriodLabel()}</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 border border-zinc-200 rounded-lg hover:border-zinc-300 transition-colors">
              <LuChartBar className="w-4 h-4" />
              Exporter
            </button>
          </div>

          {/* Graphique simplifié (représentation visuelle) */}
          <div className="space-y-6">
            {data.map((item, index) => {
              const periodKey = item.period;
              const caHeight = (item.ca / Math.max(...data.map(d => d.ca))) * 100;
              const marginHeight = (item.marge / Math.max(...data.map(d => d.marge))) * 100;

              return (
                <div key={index} className="flex items-end gap-4">
                  <div className="w-16 text-sm font-medium text-zinc-600">{periodKey}</div>
                  <div className="flex-1 flex items-end gap-1">
                    {/* Barre CA */}
                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-zinc-100 rounded-t-lg relative" style={{ height: '120px' }}>
                        <div
                          className="w-full bg-blue-500 rounded-t-lg transition-all duration-500"
                          style={{ height: `${caHeight}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-zinc-600 mt-2">
                        {(item.ca / 1000).toFixed(0)}K
                      </span>
                    </div>

                    {/* Barre Marge */}
                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-zinc-100 rounded-t-lg relative" style={{ height: '120px' }}>
                        <div
                          className="w-full bg-emerald-500 rounded-t-lg transition-all duration-500"
                          style={{ height: `${marginHeight}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-zinc-600 mt-2">
                        {(item.marge / 1000).toFixed(0)}K
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Légende */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded" />
              <span className="text-sm font-medium text-zinc-600">Chiffre d'Affaires</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded" />
              <span className="text-sm font-medium text-zinc-600">Marge</span>
            </div>
          </div>
        </div>

        {/* Analyse détaillée */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Top Performers */}
          <div className="bg-white rounded-2xl border border-zinc-200 p-6">
            <h3 className="text-lg font-bold text-zinc-900 mb-6">Analyse des Marges</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-zinc-50 rounded-lg">
                <span className="text-sm font-medium text-zinc-900">Taux de marge moyen</span>
                <span className="text-sm font-bold text-emerald-600">{marginRate.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-zinc-50 rounded-lg">
                <span className="text-sm font-medium text-zinc-900">Évolution vs période précédente</span>
                <span className={`text-sm font-bold ${growth >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                  {growth >= 0 ? '+' : ''}{growth.toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-zinc-50 rounded-lg">
                <span className="text-sm font-medium text-zinc-900">Objectif marge (25%)</span>
                <span className={`text-sm font-bold ${marginRate >= 25 ? 'text-emerald-600' : 'text-amber-600'}`}>
                  {marginRate >= 25 ? 'Atteint' : 'En cours'}
                </span>
              </div>
            </div>
          </div>

          {/* Recommandations */}
          <div className="bg-white rounded-2xl border border-zinc-200 p-6">
            <h3 className="text-lg font-bold text-zinc-900 mb-6">Recommandations</h3>
            <div className="space-y-4">
              {marginRate < 20 && (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <LuTarget className="w-5 h-5 text-amber-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-amber-900">Optimisation des coûts</p>
                      <p className="text-xs text-amber-700 mt-1">
                        Votre taux de marge est inférieur à 20%. Considérez une revue des fournisseurs.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {growth < 5 && (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <LuTrendingUp className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-900">Boost des ventes</p>
                      <p className="text-xs text-blue-700 mt-1">
                        Croissance faible ce {getPeriodLabel()}. Lancez une campagne promotionnelle.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {marginRate >= 25 && growth >= 10 && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <LuArrowUpRight className="w-5 h-5 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-emerald-900">Excellente performance !</p>
                      <p className="text-xs text-emerald-700 mt-1">
                        Continuez sur cette lancée. Pensez à réinvestir dans l'expansion.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </PageLayout>
  );
}