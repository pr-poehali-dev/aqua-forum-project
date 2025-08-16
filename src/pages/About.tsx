import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function About() {
  const admins = [
    {
      id: '1',
      username: 'AquaVerse_Owner',
      role: 'ВЛАДЕЛЕЦ',
      description: 'Основатель и главный администратор сервера AquaVerse',
      experience: '5+ лет в Minecraft'
    },
    {
      id: '2',
      username: 'AdminAlex',
      role: 'АДМИН',
      description: 'Главный технический администратор, отвечает за стабильность сервера',
      experience: '3+ года в администрировании'
    },
    {
      id: '3',
      username: 'ModerMike',
      role: 'СТАРШИЙ МОДЕРАТОР',
      description: 'Руководитель команды модераторов, следит за порядком на сервере',
      experience: '2+ года в модерации'
    }
  ];

  const features = [
    {
      icon: 'Zap',
      title: 'Анархический режим',
      description: 'Полная свобода действий! Никаких ограничений на PvP, грифинг или строительство.'
    },
    {
      icon: 'Users',
      title: 'Активное сообщество',
      description: 'Более 1000 активных игроков, кланы, альянсы и эпические сражения.'
    },
    {
      icon: 'Shield',
      title: 'Честная игра',
      description: 'Строгая античит система и опытная команда модераторов.'
    },
    {
      icon: 'Globe',
      title: 'Огромный мир',
      description: 'Бесконечный мир размером 100,000x100,000 блоков для исследований.'
    },
    {
      icon: 'Crown',
      title: 'Донат привилегии',
      description: 'Уникальные возможности для поддержавших развитие проекта.'
    },
    {
      icon: 'MessageSquare',
      title: 'Поддержка 24/7',
      description: 'Наша команда всегда готова помочь решить любые вопросы.'
    }
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'ВЛАДЕЛЕЦ': return 'bg-purple-500 hover:bg-purple-600';
      case 'АДМИН': return 'bg-red-500 hover:bg-red-600';
      case 'СТАРШИЙ МОДЕРАТОР': return 'bg-orange-500 hover:bg-orange-600';
      default: return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Вернуться на форум
              </Button>
            </Link>
            
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center">
                  <Icon name="Info" size={32} className="mr-3 text-primary" />
                  О проекте AquaVerse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  AquaVerse — это анархический Minecraft сервер, где правит закон сильного. 
                  Здесь нет границ для вашего воображения и амбиций!
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">⚡ Анархия</Badge>
                  <Badge variant="outline">🎮 PvP</Badge>
                  <Badge variant="outline">🏗️ Строительство</Badge>
                  <Badge variant="outline">💎 Выживание</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Server Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Target" size={20} className="mr-2 text-primary" />
                  Наша миссия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Мы создали AquaVerse для тех, кто устал от ограничений обычных серверов. 
                  Здесь каждый игрок может воплотить свои самые смелые идеи, построить империю 
                  или стать легендарным воином. В мире анархии выживает сильнейший!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="TrendingUp" size={20} className="mr-2 text-primary" />
                  История проекта
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Сервер был основан в 2019 году небольшой командой энтузиастов Minecraft. 
                  За годы существования мы выросли в крупное сообщество с тысячами игроков, 
                  сохранив при этом дух настоящей анархии и свободы.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Star" size={20} className="mr-2 text-primary" />
                Особенности сервера
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:bg-accent/5 transition-colors">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon name={feature.icon} size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Administration Team */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Users" size={20} className="mr-2 text-primary" />
                Команда администрации
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {admins.map((admin) => (
                  <Card key={admin.id} className="border border-border">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <Avatar className="mx-auto mb-4 w-16 h-16">
                          <AvatarFallback className="text-lg bg-primary text-primary-foreground">
                            {admin.username.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        
                        <h3 className="font-semibold text-lg mb-2">{admin.username}</h3>
                        
                        <Badge className={`mb-3 ${getRoleColor(admin.role)}`}>
                          {admin.role}
                        </Badge>
                        
                        <p className="text-sm text-muted-foreground mb-2">
                          {admin.description}
                        </p>
                        
                        <p className="text-xs text-muted-foreground">
                          {admin.experience}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Server Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Calendar" size={24} className="mx-auto text-primary mb-2" />
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm text-muted-foreground">Лет онлайн</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Users" size={24} className="mx-auto text-primary mb-2" />
                <div className="text-2xl font-bold">50k+</div>
                <div className="text-sm text-muted-foreground">Игроков зарегистрировано</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="MapPin" size={24} className="mx-auto text-primary mb-2" />
                <div className="text-2xl font-bold">100k²</div>
                <div className="text-sm text-muted-foreground">Размер мира</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Clock" size={24} className="mx-auto text-primary mb-2" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Время работы</div>
              </CardContent>
            </Card>
          </div>

          {/* Contact */}
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <Icon name="Globe" size={32} className="mx-auto text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Присоединяйтесь к нам!</h3>
                <p className="text-muted-foreground mb-6">
                  Готовы испытать настоящую свободу в мире Minecraft? 
                  Подключайтесь к серверу и начните свое приключение уже сегодня!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild>
                    <a href="https://aquaverse.ru" target="_blank" rel="noopener noreferrer">
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Официальный сайт
                    </a>
                  </Button>
                  
                  <Link to="/support">
                    <Button variant="outline">
                      <Icon name="MessageSquare" size={16} className="mr-2" />
                      Поддержка
                    </Button>
                  </Link>
                  
                  <Link to="/rules">
                    <Button variant="outline">
                      <Icon name="FileText" size={16} className="mr-2" />
                      Правила сервера
                    </Button>
                  </Link>
                </div>
                
                <div className="mt-6 p-4 bg-background/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>IP сервера:</strong> play.aquaverse.ru<br />
                    <strong>Версия:</strong> 1.19.2 - 1.20.x
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}