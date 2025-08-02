import React, { memo } from 'react';
export function Logo({
  className = ''
}) {
  return <div className={`${className}`}>
      <img src="/A_vintage-style_logo_for_the_pet_memorial_business_Tailyou_The_logo_features_a_soft_rainbow_arching_in_a_classic_retro_color_palette_The_name_Tailyou_is_prominently_displayed_at_the_bottom%2C_with_the_word_tail_emphasized_to_evoke_a_pets_tail%E2%80%A6.jpg" alt="Tailyou - Let their tail tell your forever bond" className="h-16 w-auto" />
    </div>;
}