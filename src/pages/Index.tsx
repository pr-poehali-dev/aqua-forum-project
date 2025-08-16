import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

type UserRole = 'АДМИН' | 'МОДЕРАТОР' | 'ИГРОК';

interface User {
  id: string;
  username: string;
  role: UserRole;
  avatar?: string;
  status: 'online' | 'offline';
  joinDate: string;
  messages: number;
  banned?: boolean;
}

interface ForumPost {
  id: string;
  title: string;
  author: User;
  content: string;
  timestamp: string;
  replies: number;
  views: number;
}

interface ChatMessage {
  id: string;
  user: User;
  message: string;
  timestamp: string;
}

export default function Index() {
  const [currentUser] = useState<User>({
    id: '1',
    username: 'SteveBuilder',
    role: 'ИГРОК',
    status: 'online',
    joinDate: '2024-01-15',
    messages: 145
  });

  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      user: { id: '2', username: 'AdminAlex', role: 'АДМИН', status: 'online', joinDate: '2023-01-01', messages: 1250 },
      message: 'Добро пожаловать на AquaVerse!',
      timestamp: '14:30'
    },
    {
      id: '2',
      user: { id: '3', username: 'ModerMike', role: 'МОДЕРАТОР', status: 'online', joinDate: '2023-06-15', messages: 890 },
      message: 'Не забывайте соблюдать правила форума',
      timestamp: '14:32'
    },
    {
      id: '3',
      user: { id: '4', username: 'CrafterPro', role: 'ИГРОК', status: 'online', joinDate: '2024-02-20', messages: 67 },
      message: 'Кто хочет построить вместе замок?',
      timestamp: '14:35'
    }
  ]);

  const [forumPosts] = useState<ForumPost[]>([
    {
      id: '1',
      title: 'Новые правила сервера - обязательно к прочтению!',
      author: { id: '2', username: 'AdminAlex', role: 'АДМИН', status: 'online', joinDate: '2023-01-01', messages: 1250 },
      content: 'Уважаемые игроки! В связи с ростом сообщества вводим новые правила...',
      timestamp: '2 часа назад',
      replies: 23,
      views: 156
    },
    {
      id: '2',
      title: 'Поиск команды для рейда на подземелье',
      author: { id: '5', username: 'DungeonHunter', role: 'ИГРОК', status: 'online', joinDate: '2024-03-10', messages: 89 },
      content: 'Ищу 3-4 игроков для исследования новой локации...',
      timestamp: '4 часа назад',
      replies: 8,
      views: 45
    },
    {
      id: '3',
      title: 'Проблемы с подключением к серверу',
      author: { id: '6', username: 'NewbieCrafter', role: 'ИГРОК', status: 'offline', joinDate: '2024-08-10', messages: 12 },
      content: 'Помогите, не могу зайти на сервер, выдает ошибку...',
      timestamp: '6 часов назад',
      replies: 15,
      views: 78
    }
  ]);

  const getRoleColor = (role: UserRole) => {
    switch (role) {
      case 'АДМИН': return 'bg-red-500 hover:bg-red-600';
      case 'МОДЕРАТОР': return 'bg-yellow-500 hover:bg-yellow-600';
      case 'ИГРОК': return 'bg-green-500 hover:bg-green-600';
    }
  };

  const getRoleIcon = (role: UserRole) => {
    switch (role) {
      case 'АДМИН': return 'Crown';
      case 'МОДЕРАТОР': return 'Shield';
      case 'ИГРОК': return 'User';
    }
  };

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-card dark:bg-gray-800 border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/img/9593fbc9-5bd5-427b-a6b7-824590cb7f55.jpg" 
                alt="AquaVerse" 
                className="w-10 h-10 minecraft-pixel"
              />
              <div>
                <h1 className="text-2xl font-bold text-primary">AquaVerse</h1>
                <p className="text-sm text-muted-foreground">Анархический Minecraft сервер</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/">
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  <Icon name="Home" size={16} className="mr-2" />
                  Главная
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  <Icon name="Info" size={16} className="mr-2" />
                  О нас
                </Button>
              </Link>
              <Link to="/support">
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  <Icon name="HelpCircle" size={16} className="mr-2" />
                  Поддержка
                </Button>
              </Link>
              <Button variant="ghost" className="text-foreground hover:text-primary" asChild>
                <a href="https://aquaverse.ru" target="_blank" rel="noopener noreferrer">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Наш сайт
                </a>
              </Button>
            </nav>

            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {currentUser.username.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="hidden sm:block">
                <p className="text-sm font-medium">{currentUser.username}</p>
                <Badge className={getRoleColor(currentUser.role)}>
                  <Icon name={getRoleIcon(currentUser.role)} size={12} className="mr-1" />
                  {currentUser.role}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Main Forum Content */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Welcome Card */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Zap" size={24} className="mr-2 text-primary" />
                  Добро пожаловать на форум AquaVerse!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Присоединяйтесь к нашему анархическому сообществу! Здесь вы можете делиться идеями, 
                  находить союзников и обсуждать все, что касается выживания в мире без правил.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">🎮 Анархия</Badge>
                  <Badge variant="outline">⚡ PvP</Badge>
                  <Badge variant="outline">🏗️ Строительство</Badge>
                  <Badge variant="outline">💎 Ресурсы</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Server Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Icon name="Users" size={24} className="mx-auto text-primary mb-2" />
                  <div className="text-2xl font-bold">1,247</div>
                  <div className="text-sm text-muted-foreground">Игроков</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Icon name="MessageSquare" size={24} className="mx-auto text-primary mb-2" />
                  <div className="text-2xl font-bold">8,932</div>
                  <div className="text-sm text-muted-foreground">Сообщений</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Icon name="Activity" size={24} className="mx-auto text-primary mb-2" />
                  <div className="text-2xl font-bold">156</div>
                  <div className="text-sm text-muted-foreground">Онлайн</div>
                </CardContent>
              </Card>
            </div>

            {/* Forum Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Последние темы
                  </span>
                  <Button size="sm">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Создать тему
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {forumPosts.map((post) => (
                  <div key={post.id} className="border border-border rounded-lg p-4 hover:bg-accent/5 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <Link to="/rules">
                          <h3 className="font-semibold text-lg hover:text-primary cursor-pointer transition-colors">
                            {post.title}
                          </h3>
                        </Link>
                        <p className="text-muted-foreground mt-1 line-clamp-2">
                          {post.content}
                        </p>
                        <div className="flex items-center space-x-4 mt-3 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Avatar className="w-6 h-6">
                              <AvatarFallback className="text-xs">
                                {post.author.username.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span>{post.author.username}</span>
                            <Badge size="sm" className={getRoleColor(post.author.role)}>
                              <Icon name={getRoleIcon(post.author.role)} size={10} className="mr-1" />
                              {post.author.role}
                            </Badge>
                          </div>
                          <span>•</span>
                          <span>{post.timestamp}</span>
                        </div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground ml-4">
                        <div className="flex items-center space-x-1">
                          <Icon name="MessageSquare" size={14} />
                          <span>{post.replies}</span>
                        </div>
                        <div className="flex items-center space-x-1 mt-1">
                          <Icon name="Eye" size={14} />
                          <span>{post.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

          </div>

          {/* Right Sidebar - Chat */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 h-[calc(100vh-8rem)]">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Общий чат
                  <div className="ml-auto flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="ml-2 text-sm text-muted-foreground">23</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex flex-col h-full">
                <ScrollArea className="flex-1 px-4 pb-4">
                  <div className="space-y-3">
                    {chatMessages.map((msg) => (
                      <div key={msg.id} className="flex items-start space-x-2">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="text-xs">
                            {msg.user.username.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-sm">{msg.user.username}</span>
                            <Badge size="sm" className={getRoleColor(msg.user.role)}>
                              <Icon name={getRoleIcon(msg.user.role)} size={8} className="mr-1" />
                              {msg.user.role}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1 break-words">
                            {msg.message}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <Separator />
                <div className="p-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Введите сообщение..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      className="flex-1"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          setChatMessage('');
                        }
                      }}
                    />
                    <Button size="sm" className="px-3">
                      <Icon name="Send" size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}