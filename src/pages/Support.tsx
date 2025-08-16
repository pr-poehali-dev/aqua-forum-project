import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface Ticket {
  id: string;
  title: string;
  category: string;
  status: 'open' | 'in_progress' | 'closed';
  priority: 'low' | 'medium' | 'high';
  created: string;
  author: string;
}

export default function Support() {
  const [ticketForm, setTicketForm] = useState({
    title: '',
    category: '',
    priority: 'medium',
    description: ''
  });

  const [showForm, setShowForm] = useState(false);

  const [tickets] = useState<Ticket[]>([
    {
      id: '1',
      title: 'Проблема с подключением к серверу',
      category: 'Технические проблемы',
      status: 'in_progress',
      priority: 'high',
      created: '2024-08-15',
      author: 'SteveBuilder'
    },
    {
      id: '2',
      title: 'Заявка на разбан',
      category: 'Апелляции',
      status: 'open',
      priority: 'medium',
      created: '2024-08-14',
      author: 'CrafterPro'
    },
    {
      id: '3',
      title: 'Перенос привилегий на новый аккаунт',
      category: 'Привилегии',
      status: 'closed',
      priority: 'low',
      created: '2024-08-13',
      author: 'MinerMax'
    }
  ]);

  const categories = [
    'Технические проблемы',
    'Жалобы на игроков',
    'Апелляции',
    'Привилегии',
    'Общие вопросы',
    'Предложения'
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-blue-500';
      case 'in_progress': return 'bg-yellow-500';
      case 'closed': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'open': return 'Открыт';
      case 'in_progress': return 'В работе';
      case 'closed': return 'Закрыт';
      default: return 'Неизвестно';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-orange-500';
      case 'low': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'high': return 'Высокий';
      case 'medium': return 'Средний';
      case 'low': return 'Низкий';
      default: return 'Средний';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки тикета
    console.log('Тикет отправлен:', ticketForm);
    setShowForm(false);
    setTicketForm({ title: '', category: '', priority: 'medium', description: '' });
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
                <CardTitle className="text-2xl flex items-center justify-between">
                  <span className="flex items-center">
                    <Icon name="HelpCircle" size={28} className="mr-3 text-primary" />
                    Поддержка AquaVerse
                  </span>
                  <Button onClick={() => setShowForm(!showForm)}>
                    <Icon name="Plus" size={16} className="mr-2" />
                    Создать тикет
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Наша команда поддержки работает 24/7, чтобы помочь вам решить любые вопросы. 
                  Создайте тикет и мы ответим в ближайшее время.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Ticket Form */}
          {showForm && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Plus" size={20} className="mr-2 text-primary" />
                  Создать новый тикет
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title">Заголовок тикета *</Label>
                      <Input
                        id="title"
                        value={ticketForm.title}
                        onChange={(e) => setTicketForm({...ticketForm, title: e.target.value})}
                        placeholder="Кратко опишите проблему"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="category">Категория *</Label>
                      <Select value={ticketForm.category} onValueChange={(value) => setTicketForm({...ticketForm, category: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите категорию" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="priority">Приоритет</Label>
                    <Select value={ticketForm.priority} onValueChange={(value) => setTicketForm({...ticketForm, priority: value})}>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Выберите приоритет" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Низкий</SelectItem>
                        <SelectItem value="medium">Средний</SelectItem>
                        <SelectItem value="high">Высокий</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description">Подробное описание *</Label>
                    <Textarea
                      id="description"
                      value={ticketForm.description}
                      onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                      placeholder="Опишите вашу проблему максимально подробно..."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button type="submit" disabled={!ticketForm.title || !ticketForm.category || !ticketForm.description}>
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить тикет
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                      Отмена
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Support Rules */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="FileText" size={20} className="mr-2 text-primary" />
                Правила обращения в поддержку
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Icon name="CheckCircle" size={16} className="mr-2 text-green-500" />
                      Что можно:
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Сообщать о технических проблемах</li>
                      <li>• Подавать жалобы на нарушителей</li>
                      <li>• Запрашивать помощь по игре</li>
                      <li>• Задавать вопросы о привилегиях</li>
                      <li>• Предлагать улучшения сервера</li>
                      <li>• Подавать апелляции на баны</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Icon name="XCircle" size={16} className="mr-2 text-red-500" />
                      Что запрещено:
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Спамить тикетами</li>
                      <li>• Использовать оскорбления</li>
                      <li>• Просить бесплатные привилегии</li>
                      <li>• Создавать фейковые жалобы</li>
                      <li>• Обсуждать читы и нарушения</li>
                      <li>• Требовать особого отношения</li>
                    </ul>
                  </div>
                </div>

                <Separator />

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Icon name="AlertTriangle" size={16} className="mr-2 text-yellow-500" />
                    Важные правила:
                  </h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Один тикет = одна проблема. Не объединяйте разные вопросы в один тикет.</p>
                    <p>• Предоставляйте максимально подробную информацию и скриншоты при необходимости.</p>
                    <p>• Время ответа: до 24 часов для обычных вопросов, до 12 часов для срочных.</p>
                    <p>• Нарушение правил поддержки может привести к блокировке создания тикетов.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Existing Tickets */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Ticket" size={20} className="mr-2 text-primary" />
                Ваши тикеты
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {tickets.map((ticket) => (
                    <div key={ticket.id} className="border border-border rounded-lg p-4 hover:bg-accent/5 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold hover:text-primary cursor-pointer">
                              #{ticket.id} {ticket.title}
                            </h3>
                            <Badge className={getStatusColor(ticket.status)}>
                              {getStatusText(ticket.status)}
                            </Badge>
                            <Badge variant="outline" className={getPriorityColor(ticket.priority)}>
                              {getPriorityText(ticket.priority)}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <Icon name="Tag" size={14} className="mr-1" />
                              {ticket.category}
                            </span>
                            <span className="flex items-center">
                              <Icon name="User" size={14} className="mr-1" />
                              {ticket.author}
                            </span>
                            <span className="flex items-center">
                              <Icon name="Calendar" size={14} className="mr-1" />
                              {ticket.created}
                            </span>
                          </div>
                        </div>
                        
                        <Button variant="outline" size="sm">
                          <Icon name="Eye" size={14} className="mr-2" />
                          Открыть
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  {tickets.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      <Icon name="Inbox" size={48} className="mx-auto mb-4 opacity-50" />
                      <p>У вас пока нет тикетов</p>
                      <p className="text-sm">Создайте тикет, если у вас есть вопросы</p>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <Icon name="MessageCircle" size={32} className="mx-auto text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Другие способы связи</h3>
                <p className="text-muted-foreground mb-6">
                  Если у вас срочный вопрос, вы можете связаться с нами через другие каналы:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="outline" asChild>
                    <a href="https://discord.gg/aquaverse" target="_blank" rel="noopener noreferrer">
                      <Icon name="MessageSquare" size={16} className="mr-2" />
                      Discord сервер
                    </a>
                  </Button>
                  
                  <Button variant="outline" asChild>
                    <a href="https://vk.com/aquaverse" target="_blank" rel="noopener noreferrer">
                      <Icon name="Users" size={16} className="mr-2" />
                      Группа VK
                    </a>
                  </Button>
                  
                  <Button variant="outline" asChild>
                    <a href="https://aquaverse.ru" target="_blank" rel="noopener noreferrer">
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Официальный сайт
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}