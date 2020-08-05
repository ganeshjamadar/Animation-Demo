import { Component } from '@angular/core';
import { 
  trigger, 
  state,
  style,
  transition,
  animate,
  keyframes,
  group
 } from '@angular/animations';
import { UrlHandlingStrategy } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style(
        {
          'background' : 'url(../assets/kajal-agarwal1.jpg)',
          transform: 'translateX(0px)'
        }
      )),
      state('highlighted',style(
        {
          'background' : 'url(../assets/images1.jpg)',
          transform: 'translateX(200px)'
        }
      )),
      transition('normal => highlighted', animate(3000)),
      transition('highlighted => normal', animate(6000))
    ]),
    trigger('wildState', [
      state('normal', style(
        {
          'background' : 'url(../assets/kajal-agarwal1.jpg)',
          transform: 'translateX(0px) scale(1)'
        }
      )),
      state('highlighted',style(
        {
          'background' : 'url(../assets/images1.jpg)',
          transform: 'translateX(200px) scale(1)'
        }
      )),
      state('shrunken',style(
        {
          'background' : 'url(../assets/images1.jpg)',
          transform: 'translateX(0px) scale(0.5)'
        }
      )),
      transition('normal => highlighted', animate(3000)),
      transition('highlighted => normal', animate(6000)),
      transition('shrunken <=> *',group([
        animate(300,style({
          borderRadius: '50px'
        })),
        animate(2000)
      ])
      ),
    ]),
    trigger('list1', [
      state('in', style(
        {
          opacity: 1,
          transform: 'translateX(0px)'
        }
      )),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500,style({
          opacity: 0,
          transform: 'translateX(100px)'
        }))
      ])
    ]),
    trigger('list2', [
      state('in', style(
        {
          opacity: 1,
          transform: 'translateX(0px)'
        }
      )),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1
          })
        ]))
      ]),
      transition('* => void', [
        group([
          animate(300,style({
            color: 'red'
          })),
          animate(800,style({
            opacity: 0,
            transform: 'translateX(100px)'
          }))
        ])
      ])
    ])
  ]
}) 
export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  items= ['milk', 'bread', 'tea', 'coffee'];

  onAnimate(){
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal'
    this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal'
  }

  onShrink(){
    this.wildState = 'shrunken';
  }
  onAddItem(item){
    if(item != "")
      this.items.push(item);
  }

  onDeleteItem(item)
  {
    this.items.splice(this.items.indexOf(item), 1);
  }

  animationStarted(event)
  {
    console.log(event);
  }

  animationEnded(event)
  {
    console.log(event);
  }

}
