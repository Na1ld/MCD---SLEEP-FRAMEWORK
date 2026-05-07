import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Hotspot {
  id: number;
  top: string;
  left: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-[#020203] text-slate-100 font-sans selection:bg-indigo-500/30 overflow-x-hidden scroll-smooth">
      
      <!-- HERO SECTION -->
      <section class="relative h-screen flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-b from-[#020203] via-transparent to-[#020203] z-10"></div>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#020203]/60 to-[#020203]"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_50%)] from-indigo-900/20 blur-[120px] animate-pulse"></div>
        </div>

        <div class="relative z-20 text-center px-6 animate-in fade-in zoom-in duration-1000">
          <h1 class="text-6xl md:text-9xl font-extrabold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 leading-none">
            СОН НАЙКРАЩИЙ<br><span class="text-indigo-500">ФРЕЙМВОРК</span><br><span class="text-slate-400 text-5xl md:text-7xl uppercase">для вашого мозку</span>
          </h1>
          <div class="flex items-center justify-center gap-12 text-slate-300 text-2xl md:text-3xl font-light tracking-[0.2em] mt-16">
            <span>Viktor Okryak</span>
          </div>
        </div>

        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 animate-bounce z-20">
           <svg class="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
      </section>

      <!-- INTRO SECTION -->
      <section class="relative py-16">
        <div class="max-w-4xl mx-auto px-6">
          <div class="p-12 md:p-16 rounded-[4rem] bg-white/[0.02] backdrop-blur-2xl border border-white/5 shadow-2xl space-y-8">
            <h2 class="text-4xl font-bold tracking-tight">Вступ: Когнітивна ілюзія</h2>
            <div class="space-y-6 text-xl text-slate-400 leading-relaxed font-light">
              <p>
                Більшість із нас звикла вважати сон чимось другорядним — павзою, яку можна легко скоротити заради дедлайнів чи складних проєктів. Але що, якщо цей підхід — лише небезпечна ілюзія?
              </p>
              <p>
                Ми часто жертвуємо годинами відпочинку, сподіваючись на вищу продуктивність, проте нейробіологія каже зворотне: депривація сну не дає нам фори, вона вимикає наші когнітивні ресурси один за одним.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- VIDEO SECTION -->
      <section class="py-16 bg-indigo-950/5 border-y border-white/5">
        <div class="max-w-7xl mx-auto px-6">
          <div class="flex flex-col items-center text-center mb-12 space-y-4">
             <h3 class="text-5xl font-black tracking-tighter uppercase">ЕФЕКТ ДЕПРИВАЦІЇ</h3>
          </div>

          <div class="max-w-5xl mx-auto aspect-video rounded-[3rem] bg-black border border-white/10 overflow-hidden relative group shadow-2xl shadow-indigo-500/10 mb-12">
             <video controls class="w-full h-full object-cover" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">
                <source src="assets/0505.mp4" type="video/mp4">
             </video>
          </div>

          <div class="max-w-3xl mx-auto text-center space-y-6">
            <p class="text-2xl text-slate-300 font-light leading-relaxed">
              Коли ви не спите, ваш мозок стає схожим на перевантажений сервер без належного охолодження. 
            </p>
            <p class="text-slate-400 leading-relaxed">
              Одним із ключових механізмів, що страждають першими, є глімфатична система. У глибоких фазах сну спинномозкова рідина буквально «промиває» нейронну мережу, видаляючи токсичні відходи денної активності. Без цього процесу здатність до фокусування та аналізу стрімко падає до критичних значень.
            </p>
          </div>
        </div>
      </section>

      <!-- OPTIMIZATION SECTION -->
      <section class="relative py-16">
        <div class="max-w-4xl mx-auto px-6">
          <div class="p-12 md:p-16 rounded-[4rem] bg-indigo-950/10 backdrop-blur-2xl border border-indigo-500/10 shadow-2xl space-y-8">
            <h2 class="text-4xl font-bold tracking-tight">Оптимізація ЦНС</h2>
            <div class="space-y-6 text-xl text-slate-400 leading-relaxed font-light">
              <p>
                Сон — це не вимкнення системи, а час для її найінтенсивнішої оптимізації. Це період, коли ваш біологічний «фреймворк» проводить повну діагностику та рефакторинг.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- HOTSPOTS -->
      <section class="py-16 px-6 max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h3 class="text-5xl font-black tracking-tighter uppercase">МІКРОСКОПІЧНА ГІГІЄНА</h3>
        </div>
        <div class="relative aspect-[16/9] rounded-[4rem] bg-slate-900 border border-white/5 overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=2000" class="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000 blur-[2px]">
          <div class="absolute inset-0 bg-gradient-to-t from-[#020203] via-transparent to-[#020203] opacity-60"></div>
          <div class="absolute inset-0 bg-indigo-950/20 mix-blend-overlay"></div>
          <ng-container *ngFor="let spot of hotspots">
            <button (click)="activeSpot = spot" class="absolute w-8 h-8 flex items-center justify-center group/btn" [style.top]="spot.top" [style.left]="spot.left">
              <span class="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-75"></span>
              <span class="relative z-10 w-4 h-4 bg-white rounded-full flex items-center justify-center text-[10px] text-black font-bold group-hover/btn:scale-125 transition-transform">+</span>
            </button>
          </ng-container>
          <div *ngIf="activeSpot" class="absolute bottom-12 right-12 w-96 p-8 rounded-3xl bg-black/80 backdrop-blur-2xl border border-white/10 animate-in fade-in slide-in-from-right-8 duration-500">
             <div class="flex items-center justify-between mb-6">
                <div class="flex items-center gap-3">
                   <div class="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400"><span>{{ activeSpot.icon }}</span></div>
                   <h4 class="font-bold text-xl uppercase">{{ activeSpot.title }}</h4>
                </div>
                <button (click)="activeSpot = null" class="text-slate-500 hover:text-white">✕</button>
             </div>
             <p class="text-slate-400 leading-relaxed font-light italic">"{{ activeSpot.description }}"</p>
          </div>
        </div>
      </section>

      <!-- INFOGRAPHIC SECTION with ADVANCED ANIMATION -->
      <section class="py-16 max-w-6xl mx-auto px-6">
        <div class="flex flex-col items-center space-y-12">
           <div class="text-center space-y-4">
              <h3 class="text-5xl font-black tracking-tighter uppercase">СТАТИЧНА ІНФОГРАФІКА</h3>
           </div>
           
           <div class="relative w-full aspect-[4/3] rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl bg-[#0a0a0c] group">
              <!-- Animated Infographic PNG -->
              <div class="w-full h-full p-8 flex items-center justify-center">
                <img src="assets/Screenshot_1.png" 
                     alt="Lab 4 Infographic" 
                     class="max-w-full max-h-full object-contain infographic-anim shadow-[0_0_50px_rgba(79,70,229,0.1)] group-hover:scale-[1.02] transition-transform duration-700" 
                     onerror="this.src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000'">
              </div>
           </div>

           <!-- Content after infographic -->
           <div class="max-w-3xl text-center space-y-6">
              <p class="text-2xl text-slate-300 font-light leading-relaxed">
                Поки ви спите, ваша пам'ять проходить через фазу глибокої консолідації. 
              </p>
              <p class="text-slate-400 leading-relaxed">
                Інформація з тимчасового сховища гіпокампа дбайливо перепаковується та переноситься до довготривалих структур неокортексу. Це фундаментальна компіляція даних: без повноцінного циклу відпочинку ваші знання залишаються фрагментарними та швидко втрачаються.
              </p>
           </div>
        </div>
      </section>

      <!-- GLYMPHATIC SYSTEM -->
      <section class="relative py-48">
         <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=2000" alt="Full Bleed" class="w-full h-full object-cover bg-fixed opacity-30 blur-[4px]">
            <div class="absolute inset-0 bg-gradient-to-b from-[#020203] via-transparent to-[#020203] z-10"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-[#020203] via-transparent to-[#020203] z-10"></div>
         </div>
         <div class="relative z-20 max-w-7xl mx-auto px-6">
            <div class="max-w-2xl space-y-12">
               <h2 class="text-6xl font-black tracking-tighter leading-none uppercase">ГЛІМФАТИЧНА<br>СИСТЕМА</h2>
               <div class="space-y-8 text-2xl text-slate-300 font-light leading-relaxed">
                 <p>
                   Постійна нестача сну не дає вам більше часу для роботи — вона лише змушує вас працювати гірше. Ваша здатність до логічного мислення та креативного аналізу деградує швидше, ніж ви встигаєте це помітити.
                 </p>
                 <p class="text-indigo-400 font-medium">
                   Готові виходити в онлайн з перевантаженою та токсичною нейронною мережею? Наступного разу, плануючи нічний спринт, згадайте про ціну когнітивного боргу.
                 </p>
               </div>
            </div>
         </div>
      </section>

    </div>
  `,
  styles: [`
    :host { display: block; }
    @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
    @keyframes zoom-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
    
    @keyframes infographic-reveal { 
      0% { transform: scale(0.8) translateY(20px); opacity: 0; filter: blur(10px); } 
      100% { transform: scale(1) translateY(0); opacity: 1; filter: blur(0); } 
    }

    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(1deg); }
    }

    .animate-in { animation-duration: 1000ms; animation-fill-mode: both; animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
    .fade-in { animation-name: fade-in; }
    .zoom-in { animation-name: zoom-in; }
    
    .infographic-anim { 
      animation: infographic-reveal 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards,
                 float 6s ease-in-out infinite 1.5s;
    }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #020203; }
    ::-webkit-scrollbar-thumb { background: #1e1e1e; border-radius: 2px; }
  `]
})
export class App {
  scrollOffset = 0;
  activeSpot: Hotspot | null = null;
  hotspots: Hotspot[] = [
    { id: 1, top: '30%', left: '40%', title: 'Гіпокамп', icon: '🧠', description: 'Інформація переноситься з короткочасного сховища гіпокампа до довготривалих структур неокортексу.' },
    { id: 2, top: '60%', left: '55%', title: 'Глімфатична система', icon: '🌊', description: 'Спинномозкова рідина буквально вимиває з тканин мозку нейротоксини під час сну.' },
    { id: 3, top: '45%', left: '70%', title: 'Неокортекс', icon: '💾', description: 'Тут відбувається своєрідна компіляція та збереження даних.' }
  ];
  @HostListener('window:scroll', [])
  onWindowScroll() { this.scrollOffset = window.pageYOffset; }
}
