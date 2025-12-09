import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedLogo, setSelectedLogo] = useState(0);
  const [bgColor, setBgColor] = useState('#FFFFFF');

  const logos = [
    {
      id: 0,
      name: 'Геометрическая голова',
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="60" y="50" width="80" height="30" fill="#6B7280" rx="3"/>
          <polygon points="60,80 140,80 130,140 70,140" fill="#FDB913"/>
          <rect x="85" y="100" width="8" height="35" fill="#FFFFFF" opacity="0.3"/>
          <circle cx="100" cy="120" r="4" fill="#FFFFFF"/>
          <path d="M 70 140 L 80 160 L 120 160 L 130 140" fill="#6B7280" opacity="0.6"/>
        </svg>
      )
    },
    {
      id: 1,
      name: 'Минимал принтер',
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <line x1="50" y1="60" x2="150" y2="60" stroke="#6B7280" strokeWidth="6" strokeLinecap="round"/>
          <rect x="90" y="60" width="20" height="50" fill="#FDB913" rx="2"/>
          <circle cx="100" cy="110" r="5" fill="#FFFFFF"/>
          <path d="M 60 110 Q 60 130 80 140 L 120 140 Q 140 130 140 110" fill="none" stroke="#6B7280" strokeWidth="4"/>
          <rect x="75" y="135" width="50" height="8" fill="#6B7280" rx="2" opacity="0.5"/>
        </svg>
      )
    },
    {
      id: 2,
      name: 'Экструдер куб',
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="70" y="40" width="60" height="20" fill="#6B7280" rx="2"/>
          <rect x="85" y="60" width="30" height="40" fill="#FDB913"/>
          <polygon points="100,100 90,110 90,130 110,130 110,110" fill="#FDB913" opacity="0.7"/>
          <rect x="80" y="125" width="40" height="4" fill="#FFFFFF" opacity="0.3"/>
          <circle cx="100" cy="75" r="3" fill="#FFFFFF"/>
          <line x1="70" y1="50" x2="60" y2="60" stroke="#6B7280" strokeWidth="3"/>
          <line x1="130" y1="50" x2="140" y2="60" stroke="#6B7280" strokeWidth="3"/>
        </svg>
      )
    },
    {
      id: 3,
      name: 'Слои печати',
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="70" y="50" width="60" height="15" fill="#6B7280" rx="2"/>
          <polygon points="100,65 95,75 105,75" fill="#FDB913"/>
          <rect x="85" y="80" width="30" height="3" fill="#6B7280" opacity="0.4"/>
          <rect x="80" y="88" width="40" height="3" fill="#6B7280" opacity="0.5"/>
          <rect x="75" y="96" width="50" height="3" fill="#FDB913" opacity="0.6"/>
          <rect x="70" y="104" width="60" height="3" fill="#FDB913" opacity="0.8"/>
          <rect x="65" y="112" width="70" height="4" fill="#FDB913"/>
          <circle cx="100" cy="57" r="3" fill="#FFFFFF"/>
        </svg>
      )
    }
  ];

  const backgrounds = [
    { color: '#FFFFFF', name: 'Белый' },
    { color: '#1F2937', name: 'Тёмный' },
    { color: '#F3F4F6', name: 'Серый' },
    { color: '#FDB913', name: 'Жёлтый' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-800 mb-3 tracking-tight">
            Регион 3D
          </h1>
          <p className="text-gray-600 text-lg">Конструктор логотипа</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="p-8 shadow-lg border-2 animate-scale-in">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
              <Icon name="Palette" size={24} className="text-primary" />
              Предпросмотр
            </h2>
            <div 
              className="aspect-square rounded-xl flex items-center justify-center p-12 transition-all duration-300 shadow-inner"
              style={{ backgroundColor: bgColor }}
            >
              <div className="w-full max-w-sm animate-scale-in">
                {logos[selectedLogo].svg}
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-600 mb-3">Фон:</p>
              <div className="flex gap-3">
                {backgrounds.map((bg) => (
                  <button
                    key={bg.color}
                    onClick={() => setBgColor(bg.color)}
                    className={`w-12 h-12 rounded-lg border-2 transition-all hover:scale-110 ${
                      bgColor === bg.color ? 'border-primary shadow-md scale-110' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: bg.color }}
                    title={bg.name}
                  />
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-lg border-2 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
              <Icon name="Grid3x3" size={24} className="text-primary" />
              Выбор концепции
            </h2>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {logos.map((logo) => (
                <button
                  key={logo.id}
                  onClick={() => setSelectedLogo(logo.id)}
                  className={`aspect-square rounded-lg border-2 p-6 transition-all hover:scale-105 hover:shadow-lg ${
                    selectedLogo === logo.id 
                      ? 'border-primary bg-yellow-50 shadow-md scale-105' 
                      : 'border-gray-200 bg-white hover:border-primary/50'
                  }`}
                >
                  {logo.svg}
                </button>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                {logos[selectedLogo].name}
              </p>
              <div className="flex gap-3 items-center text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 rounded bg-[#FDB913]"></div>
                  <span>Жёлтый</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 rounded bg-[#6B7280]"></div>
                  <span>Серый</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 rounded bg-white border"></div>
                  <span>Белый</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 shadow-lg border-2 animate-fade-in">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
            <Icon name="Download" size={24} className="text-primary" />
            Варианты использования
          </h2>
          
          <Tabs defaultValue="business" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="business">Визитка</TabsTrigger>
              <TabsTrigger value="web">Веб-сайт</TabsTrigger>
              <TabsTrigger value="social">Соцсети</TabsTrigger>
            </TabsList>
            
            <TabsContent value="business" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-6 border-2 shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-16 h-16 flex items-center justify-center">
                      {logos[selectedLogo].svg}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-lg">Регион 3D</p>
                      <p className="text-sm text-gray-600">3D печать и прототипирование</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>+7 (XXX) XXX-XX-XX</p>
                    <p>info@region3d.ru</p>
                  </div>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-6 border-2 shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-16 h-16 flex items-center justify-center">
                      {logos[selectedLogo].svg}
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">Регион 3D</p>
                      <p className="text-sm text-gray-300">3D печать и прототипирование</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 space-y-1">
                    <p>+7 (XXX) XXX-XX-XX</p>
                    <p>info@region3d.ru</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="web" className="space-y-4">
              <div className="bg-gradient-to-r from-white to-gray-50 rounded-lg p-8 border-2 shadow-sm">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 flex items-center justify-center">
                    {logos[selectedLogo].svg}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">Регион 3D</h3>
                    <p className="text-gray-600 mb-4">Профессиональная 3D печать для бизнеса</p>
                    <Button className="shadow-md">Заказать печать</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="social" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="aspect-square bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg p-8 flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="w-32 h-32 mb-4">
                    {logos[selectedLogo].svg}
                  </div>
                  <p className="text-white font-bold text-2xl">Регион 3D</p>
                </div>
                
                <div className="aspect-square bg-gray-900 rounded-lg p-8 flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="w-32 h-32 mb-4">
                    {logos[selectedLogo].svg}
                  </div>
                  <p className="text-white font-bold text-2xl">Регион 3D</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        <div className="mt-8 text-center">
          <div className="inline-flex gap-3">
            <Button size="lg" className="shadow-md">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать PNG
            </Button>
            <Button size="lg" variant="outline" className="shadow-md">
              <Icon name="FileCode" size={20} className="mr-2" />
              Скачать SVG
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
