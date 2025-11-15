"use client";

import { useState } from "react";
import { Calendar, Trophy, Target, Clock, MapPin, Tv, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Dados mockados - Em produção viriam de uma API
const campeonatos = [
  {
    id: 1,
    nome: "Brasileirão Série A",
    tabela: [
      { posicao: 1, time: "Flamengo", pontos: 68, jogos: 35, vitorias: 21, empates: 5, derrotas: 9, gols_pro: 65, gols_contra: 38 },
      { posicao: 2, time: "Palmeiras", pontos: 65, jogos: 35, vitorias: 19, empates: 8, derrotas: 8, gols_pro: 58, gols_contra: 35 },
      { posicao: 3, time: "Grêmio", pontos: 63, jogos: 35, vitorias: 18, empates: 9, derrotas: 8, gols_pro: 55, gols_contra: 40 },
      { posicao: 4, time: "Atlético-MG", pontos: 61, jogos: 35, vitorias: 18, empates: 7, derrotas: 10, gols_pro: 60, gols_contra: 45 },
      { posicao: 5, time: "São Paulo", pontos: 58, jogos: 35, vitorias: 16, empates: 10, derrotas: 9, gols_pro: 52, gols_contra: 42 },
      { posicao: 6, time: "Cruzeiro", pontos: 56, jogos: 35, vitorias: 16, empates: 8, derrotas: 11, gols_pro: 50, gols_contra: 44 },
      { posicao: 7, time: "Corinthians", pontos: 54, jogos: 35, vitorias: 15, empates: 9, derrotas: 11, gols_pro: 48, gols_contra: 43 },
      { posicao: 8, time: "Internacional", pontos: 52, jogos: 35, vitorias: 14, empates: 10, derrotas: 11, gols_pro: 47, gols_contra: 45 },
    ]
  }
];

const artilheiros = [
  { posicao: 1, jogador: "Pedro", time: "Flamengo", gols: 28 },
  { posicao: 2, jogador: "Calleri", time: "São Paulo", gols: 24 },
  { posicao: 3, jogador: "Hulk", time: "Atlético-MG", gols: 22 },
  { posicao: 4, jogador: "Gabigol", time: "Flamengo", gols: 20 },
  { posicao: 5, jogador: "Luciano", time: "São Paulo", gols: 18 },
  { posicao: 6, jogador: "Rony", time: "Palmeiras", gols: 17 },
  { posicao: 7, jogador: "Suárez", time: "Grêmio", gols: 16 },
  { posicao: 8, jogador: "Yuri Alberto", time: "Corinthians", gols: 15 },
];

const jogos = [
  {
    id: 1,
    data: "16/01/2025",
    hora: "16:00",
    time_casa: "Cruzeiro",
    escudo_casa: "🔵",
    time_fora: "Vitória",
    escudo_fora: "🔴",
    estadio: "Mineirão",
    cidade: "Belo Horizonte - MG",
    transmissao: ["Premiere", "SporTV"],
    campeonato: "Brasileirão Série A"
  },
  {
    id: 2,
    data: "16/01/2025",
    hora: "18:30",
    time_casa: "Flamengo",
    escudo_casa: "🔴⚫",
    time_fora: "Palmeiras",
    escudo_fora: "🟢",
    estadio: "Maracanã",
    cidade: "Rio de Janeiro - RJ",
    transmissao: ["Globo", "Premiere"],
    campeonato: "Brasileirão Série A"
  },
  {
    id: 3,
    data: "17/01/2025",
    hora: "20:00",
    time_casa: "São Paulo",
    escudo_casa: "🔴⚪⚫",
    time_fora: "Corinthians",
    escudo_fora: "⚪⚫",
    estadio: "Morumbi",
    cidade: "São Paulo - SP",
    transmissao: ["Premiere", "TNT Sports"],
    campeonato: "Brasileirão Série A"
  },
  {
    id: 4,
    data: "18/01/2025",
    hora: "19:00",
    time_casa: "Grêmio",
    escudo_casa: "🔵⚫",
    time_fora: "Internacional",
    escudo_fora: "🔴",
    estadio: "Arena do Grêmio",
    cidade: "Porto Alegre - RS",
    transmissao: ["Premiere"],
    campeonato: "Brasileirão Série A"
  },
  {
    id: 5,
    data: "19/01/2025",
    hora: "16:00",
    time_casa: "Atlético-MG",
    escudo_casa: "⚪⚫",
    time_fora: "Cruzeiro",
    escudo_fora: "🔵",
    estadio: "Arena MRV",
    cidade: "Belo Horizonte - MG",
    transmissao: ["Globo", "Premiere", "SporTV"],
    campeonato: "Brasileirão Série A"
  },
];

export default function FutebolApp() {
  const [tabAtiva, setTabAtiva] = useState("jogos");

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
              <Trophy className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Futebol Brasil</h1>
              <p className="text-emerald-100 text-sm">Tudo sobre o futebol brasileiro</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={tabAtiva} onValueChange={setTabAtiva} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 h-auto p-1 bg-white dark:bg-gray-800 shadow-md">
            <TabsTrigger 
              value="jogos" 
              className="flex items-center gap-2 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-green-500 data-[state=active]:text-white"
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Calendário</span>
            </TabsTrigger>
            <TabsTrigger 
              value="tabela" 
              className="flex items-center gap-2 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-green-500 data-[state=active]:text-white"
            >
              <Trophy className="w-4 h-4" />
              <span className="hidden sm:inline">Classificação</span>
            </TabsTrigger>
            <TabsTrigger 
              value="artilheiros" 
              className="flex items-center gap-2 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-green-500 data-[state=active]:text-white"
            >
              <Target className="w-4 h-4" />
              <span className="hidden sm:inline">Artilheiros</span>
            </TabsTrigger>
          </TabsList>

          {/* Calendário de Jogos */}
          <TabsContent value="jogos" className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-6 h-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Próximos Jogos</h2>
            </div>
            
            {jogos.map((jogo) => (
              <Card key={jogo.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-emerald-500">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    {/* Data e Hora */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                        {jogo.campeonato}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{jogo.data}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">{jogo.hora}</span>
                      </div>
                    </div>

                    {/* Times */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1 flex items-center gap-3">
                        <span className="text-4xl">{jogo.escudo_casa}</span>
                        <span className="text-xl font-bold text-gray-800 dark:text-gray-100">{jogo.time_casa}</span>
                      </div>
                      
                      <div className="flex items-center justify-center px-6 py-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full">
                        <span className="text-white font-bold text-lg">VS</span>
                      </div>
                      
                      <div className="flex-1 flex items-center justify-end gap-3">
                        <span className="text-xl font-bold text-gray-800 dark:text-gray-100">{jogo.time_fora}</span>
                        <span className="text-4xl">{jogo.escudo_fora}</span>
                      </div>
                    </div>

                    <Separator />

                    {/* Informações do Jogo */}
                    <div className="flex flex-col sm:flex-row gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4 text-emerald-600" />
                        <span><strong>{jogo.estadio}</strong> - {jogo.cidade}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Tv className="w-4 h-4 text-emerald-600" />
                        <div className="flex gap-2 flex-wrap">
                          {jogo.transmissao.map((canal, idx) => (
                            <Badge key={idx} variant="outline" className="bg-white dark:bg-gray-800">
                              {canal}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Tabela de Classificação */}
          <TabsContent value="tabela" className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="w-6 h-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Classificação - Brasileirão Série A</h2>
            </div>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-emerald-600 to-green-600 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold">#</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Time</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold">P</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold hidden sm:table-cell">J</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold hidden md:table-cell">V</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold hidden md:table-cell">E</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold hidden md:table-cell">D</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold hidden lg:table-cell">GP</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold hidden lg:table-cell">GC</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold hidden lg:table-cell">SG</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800">
                      {campeonatos[0].tabela.map((time, idx) => (
                        <tr 
                          key={time.posicao} 
                          className={`border-b border-gray-200 dark:border-gray-700 hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors ${
                            idx < 4 ? 'bg-blue-50 dark:bg-blue-950/30' : 
                            idx < 6 ? 'bg-green-50 dark:bg-green-950/30' : 
                            idx >= campeonatos[0].tabela.length - 4 ? 'bg-red-50 dark:bg-red-950/30' : ''
                          }`}
                        >
                          <td className="px-4 py-3 font-bold text-gray-700 dark:text-gray-300">{time.posicao}</td>
                          <td className="px-4 py-3 font-semibold text-gray-800 dark:text-gray-100">{time.time}</td>
                          <td className="px-4 py-3 text-center font-bold text-emerald-600 dark:text-emerald-400">{time.pontos}</td>
                          <td className="px-4 py-3 text-center text-gray-600 dark:text-gray-400 hidden sm:table-cell">{time.jogos}</td>
                          <td className="px-4 py-3 text-center text-gray-600 dark:text-gray-400 hidden md:table-cell">{time.vitorias}</td>
                          <td className="px-4 py-3 text-center text-gray-600 dark:text-gray-400 hidden md:table-cell">{time.empates}</td>
                          <td className="px-4 py-3 text-center text-gray-600 dark:text-gray-400 hidden md:table-cell">{time.derrotas}</td>
                          <td className="px-4 py-3 text-center text-gray-600 dark:text-gray-400 hidden lg:table-cell">{time.gols_pro}</td>
                          <td className="px-4 py-3 text-center text-gray-600 dark:text-gray-400 hidden lg:table-cell">{time.gols_contra}</td>
                          <td className="px-4 py-3 text-center font-semibold text-gray-700 dark:text-gray-300 hidden lg:table-cell">
                            {time.gols_pro - time.gols_contra > 0 ? '+' : ''}{time.gols_pro - time.gols_contra}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Legenda */}
                <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-200 dark:bg-blue-900 rounded"></div>
                      <span className="text-gray-600 dark:text-gray-400">Libertadores</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-200 dark:bg-green-900 rounded"></div>
                      <span className="text-gray-600 dark:text-gray-400">Pré-Libertadores</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-200 dark:bg-red-900 rounded"></div>
                      <span className="text-gray-600 dark:text-gray-400">Rebaixamento</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Artilheiros */}
          <TabsContent value="artilheiros" className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Target className="w-6 h-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Artilharia - Brasileirão Série A</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {artilheiros.map((artilheiro) => (
                <Card 
                  key={artilheiro.posicao} 
                  className={`overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    artilheiro.posicao === 1 ? 'border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-white dark:from-yellow-950/20 dark:to-gray-800' :
                    artilheiro.posicao === 2 ? 'border-2 border-gray-400 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800' :
                    artilheiro.posicao === 3 ? 'border-2 border-orange-400 bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/20 dark:to-gray-800' :
                    'hover:border-emerald-300'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-xl ${
                          artilheiro.posicao === 1 ? 'bg-yellow-400 text-yellow-900' :
                          artilheiro.posicao === 2 ? 'bg-gray-400 text-gray-900' :
                          artilheiro.posicao === 3 ? 'bg-orange-400 text-orange-900' :
                          'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300'
                        }`}>
                          {artilheiro.posicao}º
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">{artilheiro.jogador}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{artilheiro.time}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <Target className="w-6 h-6 text-emerald-600 mb-1" />
                        <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{artilheiro.gols}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-500">gols</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>⚽ Futebol Brasil - Acompanhe tudo sobre o futebol brasileiro</p>
        </div>
      </footer>
    </div>
  );
}
