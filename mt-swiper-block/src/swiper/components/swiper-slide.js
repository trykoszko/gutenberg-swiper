const { __ } = wp.i18n

const SwiperSlide = props => {
	return (
		<figure className="swiper-slide mt-slider__slide">
			{ props.isAdmin ? <button className="mt-slider__delete" onClick={ () => props.removeSlide( props.imgId ) }>
				{ __( '❌' ) }
			</button> : '' }
			<img src={ props.imgUrl } className="mt-slider__img" />
			{ props.showCaptions ? <figcaption className="mt-slider__caption">
				{ props.imgCaption }
			</figcaption> : '' }
		</figure>
	)
}

export default SwiperSlide
