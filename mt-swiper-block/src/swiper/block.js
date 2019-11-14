/**
 * BLOCK: mt-swiper-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

import './editor.scss'
import './style.scss'

import SwiperSlide from './components/swiper-slide'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { Component } = wp.element
const { MediaUploadCheck, MediaUpload, InspectorControls } = wp.blockEditor
const { Button, PanelBody, PanelRow, ToggleControl } = wp.components

registerBlockType( 'cgb/block-mt-swiper-block', {
	title: __( 'mt-swiper-block - CGB Block' ),
	icon: 'shield',
	category: 'common',
	keywords: [
		__( 'mt-swiper-block — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' )
	],
	attributes: {
		images: {
			type: Array,
			default: []
		},
		showImageTitles: {
			type: Boolean,
			default: true
		}
	},

	edit: class extends Component {
		constructor(...args) {
			super(...args)
			this.addSlide = this.addSlide.bind(this)
			this.removeSlide = this.removeSlide.bind(this)
			this.toggleImageTitles = this.toggleImageTitles.bind(this)
			this.sliderRef = React.createRef()
		}

		initSwipers() {
			if (window.Swiper === undefined || Swiper === undefined) {
				console.error('MT Swiper Block error: Swiper is not defined')
			} else {
				const mtSwiperBlock = new Swiper(this.sliderRef.current, {
					loop: false,
					autoplay: false,
					observer: true,
					observeSlideChildren: true
				})
			}
		}

		componentDidMount() {
			this.initSwipers()
		}

		addSlide(media) {
			this.props.setAttributes({ images: [...this.props.attributes.images, media] })
		}

		removeSlide(mediaId) {
			const {
				setAttributes,
				attributes: {
					images
				}
			} = this.props
			const filteredImages = images.filter(image => image.id !== mediaId)
			setAttributes({ images: filteredImages })
		}

		toggleImageTitles(bool) {
			this.props.setAttributes({ showImageTitles: bool })
		}

		render() {
			const { showImageTitles, images } = this.props.attributes

			return (
				<div>
					<InspectorControls>
						<PanelBody title={ `${__('Carousel slides')} (total: ${images.length})` }>
							<PanelRow>
								<MediaUploadCheck>
									<MediaUpload
										onSelect={ this.addSlide }
										render={ ( { open } ) => (
											<Button className="mt-inspectorcontrols-btn" onClick={ open }>
												{ __('Add a slide') }
											</Button>
										) }
									/>
								</MediaUploadCheck>
							</PanelRow>
						</PanelBody>
						<PanelBody title={ __('Carousel options') }>
							<ToggleControl
								label="Show slide images' titles?"
								checked={ showImageTitles }
								onChange={ this.toggleImageTitles }
							/>
						</PanelBody>
					</InspectorControls>
					<div className="swiper-container js-mt-swiper-block c-mt-swiper-block" ref={ this.sliderRef }>
						<div className="swiper-wrapper">
							{ images.length > 0 ? images.map(({ title, id, url }) => (
								<SwiperSlide
									key={ id }
									isAdmin
									imgUrl={ url }
									imgId={ id }
									imgCaption={ title }
									showCaptions={ showImageTitles }
									removeSlide={ this.removeSlide }
								/>
							)) : __('Please edit this block and add some images first!') }
						</div>
					</div>
				</div>
			)
		}
	},

	save: props => {
		const { images, showImageTitles } = props.attributes

		return (
			<div className="swiper-container js-mt-swiper-block mt-slider">
				<div className="swiper-wrapper mt-slider__wrapper">
					{ images.length > 0 ? images.map(({ url, title }) => (
						<SwiperSlide
							isAdmin={ false }
							imgUrl={ url }
							imgCaption={ title }
							showCaptions={ showImageTitles }
						/>
					)) : __('Please edit this block and add some images first!') }
				</div>
			</div>
		)
	}
} )
