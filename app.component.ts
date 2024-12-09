import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoBindingComponent } from './demo-binding/demo-binding.component';
import { FormsModule } from '@angular/forms';
import { DerectivesDemoComponent } from './derectives-demo/derectives-demo.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoBindingComponent, FormsModule, DerectivesDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prelim-lab-data-binding';
}
