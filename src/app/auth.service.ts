import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: { email: string; password: string }[] = [];
  constructor() { }

  register(email: string, password: string) {
    this.users.push({ email, password });
    console.log('User registered:', email);
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    return !!user;
  }
}

  