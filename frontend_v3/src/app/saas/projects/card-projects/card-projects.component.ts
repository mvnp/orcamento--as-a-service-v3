import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;

@Component({
    selector: 'app-card-projects',
    templateUrl: './card-projects.component.html',
    styleUrls: ['./card-projects.component.css']
})
export class CardProjectsComponent implements OnInit, AfterViewInit {

    sendIdProject: number;

    numberOfProjects = [
        { id: 1, src: './assets/img/card-2.jpg' },
        { id: 2, src: './assets/img/card-3.jpg' },
        { id: 3, src: './assets/img/card-1.jpg' },
        { id: 4, src: './assets/img/card-2.jpg' },
        { id: 5, src: './assets/img/card-3.jpg' },
        { id: 6, src: './assets/img/card-1.jpg' },
        { id: 7, src: './assets/img/card-2.jpg' },
        { id: 8, src: './assets/img/card-3.jpg' },
        { id: 9, src: './assets/img/card-1.jpg' },
        { id: 10, src: './assets/img/card-2.jpg' },
        { id: 11, src: './assets/img/card-3.jpg' },
        { id: 12, src: './assets/img/card-1.jpg' },
        { id: 13, src: './assets/img/card-2.jpg' },
        { id: 14, src: './assets/img/card-3.jpg' },
        { id: 15, src: './assets/img/card-1.jpg' },
        { id: 16, src: './assets/img/card-2.jpg' },
        { id: 17, src: './assets/img/card-3.jpg' },
        { id: 18, src: './assets/img/card-1.jpg' },
        { id: 19, src: './assets/img/card-2.jpg' },
        { id: 20, src: './assets/img/card-1.jpg' },
    ];

    constructor(private router: Router) {}

    ngOnInit(): void {}

    ngAfterViewInit() {
        const breakCards = true;
        if (breakCards === true) 
        {
            $('[data-header-animation="true"]').each(function() {
                const $fix_button = $(this);
                const $card = $(this).parent('.card');
                // part 1
                $card.find('.fix-broken-card').click(function() {
                    const $header = $(this).parent().parent().siblings('.card-header, .card-header-image');
                    $header.removeClass('hinge').addClass('fadeInDown');
                    $card.attr('data-count', 0);
                    setTimeout(function(){
                        $header.removeClass('fadeInDown animate');
                    }, 480);
                });
                // part 2
                $card.mouseenter(function(){
                    const $this = $(this);
                    const hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
                    $this.attr('data-count', hover_count);

                    if (hover_count >= 20) {
                        $(this).children('.card-header, .card-header-image').addClass('hinge animated');
                    }
                });
                }
            );
        }
    }

    sendIdOfProjectToLp(id){
        localStorage.setItem("idOfProject", parseInt(id).toString());
        return this.router.navigate(['saas/projects/lp']);
    }
}
