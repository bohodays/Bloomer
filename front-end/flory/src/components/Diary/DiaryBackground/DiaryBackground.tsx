import React from "react";
import $ from "jquery";
import { TweenLite } from "gsap";
import { SContainer } from "./styles";

const DiaryBackground = () => {
  $(function () {
    var svg = [
      "https://dl.dropboxusercontent.com/s/wppjkl1mapcofi1/egles_dark.svg?dl=0",
      "https://dl.dropboxusercontent.com/s/1tluv1o16bu8dv1/egles_light.svg?dl=0",
      "https://dl.dropboxusercontent.com/s/df61ibt6hk9mk2z/sun.svg",
      "https://dl.dropboxusercontent.com/s/z5nkite52l21gnn/moon.svg",
      "https://dl.dropboxusercontent.com/s/a24sxazrdbnkn4q/stars.svg?dl=0",
      "https://dl.dropboxusercontent.com/s/n329j6mekvr5mec/makonis_1.svg?dl=0",
      "https://dl.dropboxusercontent.com/s/jpd6t207d4s1ozo/makonis_2.svg?dl=0",
    ];

    $(".forest-top").load(svg[0]);
    $(".forest-bot").load(svg[1]);
    $(".sun").load(svg[2]);
    $(".moon").load(svg[3]);
    $(".stars").load(svg[4]);

    $(".cloud.top, .cloud.top-backup").load(svg[5]);
    $(".cloud.mid, .cloud.mid-backup").load(svg[6]);
    $(".cloud.bot, .cloud.bot-backup").load(svg[5]);

    TweenLite.to($(".moon"), 0, {
      bottom: "40px",
      scale: 1,
    });

    $(".cloud").each(function () {
      tweenCloud($(this));
    });

    $(".cbx").bind("change", function () {
      daySwap();
    });
  });

  var tweenCloud = function ($cloud: any) {
    var offset = $cloud.position(),
      speed = (450 - offset.left) / 10;
    TweenLite.to($cloud, speed, {
      left: "350px",
      onComplete: function () {
        TweenLite.to($cloud, 0, {
          left: "-300px",
          //top: 120 - (Math.random() * 140) + 'px',
          onComplete: function () {
            tweenCloud($cloud);
          },
        });
      },
    });
  };

  var daySwap = function () {
    var $cbx = $(".cbx"),
      day = !$cbx.is(":checked"),
      $sun = $(".sun"),
      $moon = $(".moon"),
      bounceSize = 75,
      visiblePosition = 45;
    $("h3").fadeOut(function () {
      $(this)
        .text((day ? "Night" : "Day") + " mode on")
        .fadeIn();
      $(".container").toggleClass("day");
      $(".background")
        .removeClass(day ? "day" : "night")
        .addClass(day ? "night" : "day");
    });

    TweenLite.to(day ? $sun : $moon, 0.2, {
      bottom: bounceSize + "px",
      scaleX: 0.6,
      ease: Bounce.easeOut,
    });
    TweenLite.to(day ? $sun : $moon, 0.3, {
      bottom: "-40px",
      ease: Power4.easeOut,
      delay: 0.2,
    });
    TweenLite.to(day ? $sun : $moon, 0, {
      scaleX: 1,
    });

    TweenLite.to(day ? $moon : $sun, 0.5, {
      bottom: bounceSize + "px",
      scaleX: 1,
      scaleY: 0.6,
      ease: Bounce.easeOut,
      delay: 1,
    });
    TweenLite.to(day ? $moon : $sun, 0.4, {
      bottom: visiblePosition + "px",
      ease: Bounce.easeOut,
      scaleY: 1,
      delay: 1.2,
    });
  };

  return (
    <SContainer>
      <div className="container">
        <div className="background night">
          <div className="overlay"></div>
          <div className="sun"></div>
          <div className="moon"></div>
          <div className="stars"></div>
          <div className="cloud top"></div>
          <div className="cloud mid"></div>
          <div className="cloud bot-backup"></div>
          <div className="forest-top"></div>
          <div className="forest-bot"></div>
        </div>
      </div>
    </SContainer>
  );
};

export default DiaryBackground;
